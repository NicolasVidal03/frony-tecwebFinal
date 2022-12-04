import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-game',
  templateUrl: './search-game.component.html',
  styleUrls: ['./search-game.component.scss']
})
export class SearchGameComponent implements OnInit {

  games: any=[];

  constructor(private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.gameService.getOneGame(String(this.route.snapshot.paramMap.get('game'))).subscribe(datos=>this.games=datos);
  }

  busqueda () {

  }

}
