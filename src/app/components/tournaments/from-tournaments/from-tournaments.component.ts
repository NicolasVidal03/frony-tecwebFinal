import { Component } from '@angular/core';
import {Tournament} from "../../../interfaces/tournament.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {TournamentService} from "../../../services/tournament.service";

@Component({
  selector: 'app-from-tournaments',
  templateUrl: './from-tournaments.component.html',
  styleUrls: ['./from-tournaments.component.scss']
})
export class FromTournamentsComponent {
  tournament: any={};
  constructor(private  tournamentService: TournamentService, private router: Router) {
  }



  agregarTournament() {
    return this.tournamentService.addTournament(this.tournament).subscribe(res=>{console.log(res); this.router.navigate(['/tournament'])}, err=>console.log(err))
  }

}
