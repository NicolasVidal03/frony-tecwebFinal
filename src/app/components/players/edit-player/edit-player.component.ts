import {Component, OnInit} from '@angular/core';
import {Player} from "../../../interfaces/player.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {Game} from "../../../interfaces/game.interface";
import {PlayerService} from "../../../services/player.service";
import {EditGameComponent} from "../../edit-game/edit-game.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../../../services/game.service";

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit{
  myForm: FormGroup;
  player: any= {}
  id: any = 0;
  games: any=[];

  constructor(private route: ActivatedRoute, private playerServices: PlayerService, private router: Router, private gameService: GameService) {
    this.myForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      sueldo: new FormControl(''),
      game: new FormControl('')
    })
  }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getPlayer();
    this.gameService.getGames().subscribe(datos=>this.games=datos);
  }

  getPlayer() {
    this.playerServices.getOnePlayer(this.id).subscribe(response=>{
      console.log("get player", response)
      this.player = response
    });
  }

  submitPlayer() {
    console.log(this.myForm.value)
    this.playerServices.update(this.id, this.myForm.value).subscribe(res=> {
      this.router.navigate(['/player'])
    })
  }


}
