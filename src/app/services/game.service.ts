import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Game} from "../interfaces/game.interface";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get('/server/games');
  }

  addGame(game: Game): Observable<any> {
    return this.http.post('http://localhost:3000/games', game);
  }

  getOneGame(id: string): Observable<any> {
    return this.http.get(`server/games/${id}`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`/server/games/${id}`);
  }

  update(id: string, myForm: FormGroup): Observable<any> {
    return this.http.patch(`server/games/${id}`, myForm);
  }

}
