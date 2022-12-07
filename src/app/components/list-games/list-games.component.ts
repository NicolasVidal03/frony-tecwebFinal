import {Component, OnInit} from '@angular/core';
import {Game} from "../../interfaces/game.interface";
import {GameService} from "../../services/game.service";
import {Observable} from "rxjs";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.scss']
})
export class ListGamesComponent implements OnInit{

  public games: any=[];
  isAdmin: boolean = false;

  constructor(private gameService: GameService,
              private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(datos=>this.games=datos);
    this.isAdmin = this.tokenService.isAdmin();
  }

  deleteGame(id: string): void {
    this.gameService.delete(id).subscribe( res=>{
      this.gameService.getGames().subscribe(datos=>this.games=datos);
    });
  }

  updateGame(id: string): any {
    this.gameService.getOneGame(id).subscribe(datos=>this.games=datos);
  }

}
