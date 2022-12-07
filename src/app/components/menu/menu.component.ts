import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}
  ngOnInit() {
    this.isLogged = this.tokenService.isLogged();
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login'])
  }

  /*buscador(): string{
    return (<HTMLInputElement>document.getElementById('gameId')).value;
  }*/

}
