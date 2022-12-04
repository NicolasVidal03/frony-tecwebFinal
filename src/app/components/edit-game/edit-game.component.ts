import {Component, OnInit} from '@angular/core';
import {Game} from "../../interfaces/game.interface";
import {GameService} from "../../services/game.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  game: Game={
    titulo: '',
    lanzamiento: 0,
    genero: '',
    calificacion: 0
  };
  constructor(private route: ActivatedRoute, private  gameService: GameService, private router: Router) {
  }

  ngOnInit(): void {
    this.getGame();
  }

  getGame() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.gameService.getOneGame(id).subscribe(dato=>this.game=dato);
  }

  submitGame(){
    this.gameService.update(String(this.game.id), this.game).subscribe(res=>{console.log(res); this.router.navigate(['/game'])}, err=>console.log(err));
  }

}
