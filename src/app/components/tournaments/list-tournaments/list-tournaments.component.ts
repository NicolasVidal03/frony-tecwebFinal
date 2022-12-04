import {Component, OnInit} from '@angular/core';
import {TournamentService} from "../../../services/tournament.service";

@Component({
  selector: 'app-list-tournaments',
  templateUrl: './list-tournaments.component.html',
  styleUrls: ['./list-tournaments.component.scss']
})
export class ListTournamentsComponent implements OnInit{

  public tournaments: any=[];

  constructor(private tournamentService: TournamentService) {
  }

  ngOnInit() : void {
    this.tournamentService.getTournaments().subscribe(datos=>this.tournaments=datos)
  }

  deleteTournament(id: string): void {
    this.tournamentService.delete(id).subscribe( res=>{
      this.tournamentService.getTournaments().subscribe(datos=>this.tournaments=datos);
    });
  }

  updateGame(id: string): any {
    this.tournamentService.getOneTournament(id).subscribe(datos=>this.tournaments=datos);
  }

}
