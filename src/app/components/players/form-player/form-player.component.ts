import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../../services/player.service";
import {Player} from "../../../interfaces/player.interface";
import {Game} from "../../../interfaces/game.interface";
import {GameService} from "../../../services/game.service";

@Component({
  selector: 'app-form-player',
  templateUrl: './form-player.component.html',
  styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnInit{
  /*player: Player={
    nombre: "",
    edad: 0,
    sueldo: 0
  };*/
  player: any={};
  games: any=[];

  constructor(private playerService: PlayerService, private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(datos=>this.games=datos);
  }


  agregarPlayer() {
    return this.playerService.addPlayer(this.player).subscribe(res=>{console.log(res)}, err=>console.log(err))
  }
}
