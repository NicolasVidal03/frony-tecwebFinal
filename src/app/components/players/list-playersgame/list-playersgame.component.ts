import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {GameService} from "../../../services/game.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-playersgame',
  templateUrl: './list-playersgame.component.html',
  styleUrls: ['./list-playersgame.component.scss']
})
export class ListPlayersgameComponent implements OnInit{
  game: any= {}
  id: any = 0;

  constructor(private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getGame(this.id);
  }

  getGame(id: string) {
    this.gameService.getOneGame(this.id).subscribe(dato=>{
      console.log("get game", dato)
      this.game = dato
    });
  }


}




