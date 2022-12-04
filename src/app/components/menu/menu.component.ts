import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  constructor() {
  }
  ngOnInit() {
  }

  buscador(): string{
    return (<HTMLInputElement>document.getElementById('gameId')).value;
  }

}
