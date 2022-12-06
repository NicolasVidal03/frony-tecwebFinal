import {Component, OnInit} from '@angular/core';
import {Game} from "../../interfaces/game.interface";
import {GameService} from "../../services/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})
export class EditGameComponent implements OnInit {
  myForm: FormGroup;
  game: any= {}
  id: any = 0;

  constructor(private route: ActivatedRoute, private  gameService: GameService, private router: Router) {
    this.myForm = new FormGroup({
      titulo: new FormControl('', Validators.required),
      lanzamiento: new FormControl('', Validators.required),
      genero : new FormControl(''),
      calificacion: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getGame();
  }

  getGame() {
    this.gameService.getOneGame(this.id).subscribe(dato=>{
      console.log("get game", dato)
      this.game = dato
    });
  }

  submitGame(){
    console.log(this.myForm.value)
    this.gameService.update(this.id, this.myForm.value).subscribe(response=> {
      this.router.navigate(['/game'])
    })
  }

}
