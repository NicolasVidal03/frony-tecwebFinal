import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {PlayerService} from "../../../services/player.service";
import {TokenService} from "../../../services/token.service";

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent implements OnInit{

  public players: any=[];
  isAdmin: boolean = false;

  constructor(private playerService: PlayerService,
              private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(datos=>this.players=datos);
    this.isAdmin = this.tokenService.isAdmin();
  }

  deletePlayer(id: string): void {
    this.playerService.delete(id).subscribe( res=>{
      this.playerService.getPlayers().subscribe(datos=>this.players=datos);
    });
  }

  updatePlayer(id: string): any {
    this.playerService.getOnePlayer(id).subscribe(datos=>this.players=datos);
  }

  /*getGame() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.playerService.getOneGame(id).subscribe(dato=>this.game=dato);
  }*/

}
