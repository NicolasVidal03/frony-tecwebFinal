import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../interfaces/player.interface";
import {Tournament} from "../interfaces/tournament.interface";
import {Game} from "../interfaces/game.interface";

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) { }

  getTournaments(): Observable<any> {
    return this.http.get('server/tournaments')
  }

  /*getPlayersID(id: string): Observable<any> {
    return this.http.get('server/players')
  }*/

  getOneTournament(id: string): Observable<any> {
    return this.http.get(`server/tournaments/${id}`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`server/tournaments/${id}`);
  }

  update(id: string, tournament: Tournament): Observable<any> {
    return this.http.patch(`server/tournaments/${id}`, tournament);
  }

  addTournament(tournament: Tournament): Observable<any> {
    return this.http.post('server/tournaments', tournament);
  }
}
