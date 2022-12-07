import {Component, OnInit} from '@angular/core';
import {TournamentService} from "../../../services/tournament.service";
import {TokenService} from "../../../services/token.service";

@Component({
  selector: 'app-list-tournaments',
  templateUrl: './list-tournaments.component.html',
  styleUrls: ['./list-tournaments.component.scss']
})
export class ListTournamentsComponent implements OnInit{

  public tournaments: any=[];
  isAdmin: boolean = false;

  constructor(private tournamentService: TournamentService,
              private tokenService: TokenService
  ) {
  }

  ngOnInit() : void {
    this.tournamentService.getTournaments().subscribe(datos=>this.tournaments=datos);
    this.isAdmin = this.tokenService.isAdmin();
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
