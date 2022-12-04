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
  tournament: Tournament={
    nombreTour: "",
    premio: 0,
    localidad: "",
    fecha: 0,
    fechaFin: 0
  };
  constructor(private  tournamentService: TournamentService) {
  }



  agregarTournament() {
    return this.tournamentService.addTournament(this.tournament).subscribe(res=>{console.log(res)}, err=>console.log(err))
  }

}
