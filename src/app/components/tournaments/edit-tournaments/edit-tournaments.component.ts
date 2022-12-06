import {Component, OnInit} from '@angular/core';
import {Tournament} from "../../../interfaces/tournament.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../../../services/game.service";
import {TournamentService} from "../../../services/tournament.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-tournaments',
  templateUrl: './edit-tournaments.component.html',
  styleUrls: ['./edit-tournaments.component.scss']
})
export class EditTournamentsComponent implements OnInit{
  myForm: FormGroup;
  tournament: any= {}
  id: any = 0;

  constructor(private route: ActivatedRoute, private  tournamentService: TournamentService, private router: Router) {
    this.myForm = new FormGroup({
      nombreTour: new FormControl('', Validators.required),
      premio: new FormControl(''),
      localidad: new FormControl(''),
      fecha: new FormControl(''),
      fechaFin: new FormControl('')
    })
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getTournament();
  }

  getTournament() {
    this.tournamentService.getOneTournament(this.id).subscribe(response=>{
      console.log("get tournament", response)
      this.tournament = response
    });
  }

  submitTournament() {
    console.log(this.myForm.value)
    this.tournamentService.update(this.id, this.myForm.value).subscribe(response => {
      this.router.navigate(['/tournament'])
    })
  }

}
