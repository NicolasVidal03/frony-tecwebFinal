import {Component, OnInit} from '@angular/core';
import {Tournament} from "../../../interfaces/tournament.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../../services/game.service";
import {TournamentService} from "../../../services/tournament.service";

@Component({
  selector: 'app-edit-tournaments',
  templateUrl: './edit-tournaments.component.html',
  styleUrls: ['./edit-tournaments.component.scss']
})
export class EditTournamentsComponent implements OnInit{
  tournament: Tournament={
    nombreTour: "",
    premio: 0,
    localidad: "",
    fecha: 0,
    fechaFin: 0
  };
  constructor(private route: ActivatedRoute, private  tournamentService: TournamentService, private router: Router) {
  }


  ngOnInit(): void {
  }

  getTournament() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.tournamentService.getOneTournament(id).subscribe(dato=>this.tournament=dato);
  }

  submitTournament(){
    this.tournamentService.update(String(this.tournament.id), this.tournament).subscribe(res=>{console.log(res); this.router.navigate(['/tournament'])}, err=>console.log(err));
  }

}
