import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Game} from "../interfaces/game.interface";
import {Player} from "../interfaces/player.interface";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get('server/players')
  }

  /*getPlayersID(id: string): Observable<any> {
    return this.http.get('server/players')
  }*/

  getOnePlayer(id: string): Observable<any> {
    return this.http.get(`server/players/${id}`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`server/players/${id}`);
  }

  update(id: string, myForm: FormGroup): Observable<any> {
    return this.http.patch(`server/players/${id}`, myForm);
  }

  addPlayer(player: Player): Observable<any> {
    return this.http.post('server/players', player);
  }

}
