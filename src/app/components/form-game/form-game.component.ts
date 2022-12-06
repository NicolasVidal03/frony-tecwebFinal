import {Component, OnInit} from '@angular/core';
import {Game} from "../../interfaces/game.interface";
import {GameService} from "../../services/game.service";
import * as http from "http";
import * as https from "https";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-game',
  templateUrl: './form-game.component.html',
  styleUrls: ['./form-game.component.scss']
})
export class FormGameComponent implements OnInit {
  game: Game={
    titulo: '',
    lanzamiento: 0,
    genero: '',
    calificacion: 0
  };

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
  }

  agregarGame() {
    return this.gameService.addGame(this.game).subscribe(res=>{console.log(res); this.router.navigate(['/game'])}, err=>console.log(err))
  }



}
