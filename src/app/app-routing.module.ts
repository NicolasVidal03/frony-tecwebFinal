import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListGamesComponent} from "./components/list-games/list-games.component";
import {FormGameComponent} from "./components/form-game/form-game.component";
import {SearchGameComponent} from "./components/search-game/search-game.component";
import {EditGameComponent} from "./components/edit-game/edit-game.component";
import {ListPlayersComponent} from "./components/players/list-players/list-players.component";
import {EditPlayerComponent} from "./components/players/edit-player/edit-player.component";
import {FormPlayerComponent} from "./components/players/form-player/form-player.component";
import {ListTournamentsComponent} from "./components/tournaments/list-tournaments/list-tournaments.component";
import {EditTournamentsComponent} from "./components/tournaments/edit-tournaments/edit-tournaments.component";
import {FromTournamentsComponent} from "./components/tournaments/from-tournaments/from-tournaments.component";
import {ListPlayersgameComponent} from "./components/players/list-playersgame/list-playersgame.component";
import {
  ListTournamentsgameComponent
} from "./components/tournaments/list-tournamentsgame/list-tournamentsgame.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login.component";
import {RegistroComponent} from "./auth/registro.component";
import {LoginGuard} from "./guards/login.guard";
import {GameGuard} from "./guards/game.guard";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "game", component: ListGamesComponent, canActivate: [GameGuard], data: {expectedRol: ['admin', 'user']}},
  {path: "game/agregar", component: FormGameComponent, canActivate: [GameGuard], data: {expectedRol: ['admin']}},
  {path: "game/buscar/:game", component: SearchGameComponent, canActivate: [GameGuard], data: {expectedRol: ['admin', 'user']}},
  {path: "game/editar/:id", component: EditGameComponent, canActivate: [GameGuard], data: {expectedRol: ['admin']}},
  {path: "player", component: ListPlayersComponent, canActivate: [GameGuard], data: {expectedRol: ['admin', 'user']}},
  {path: "player/editar/:id", component: EditPlayerComponent, canActivate: [GameGuard], data: {expectedRol: ['admin']}},
  {path: "player/agregar", component: FormPlayerComponent, canActivate: [GameGuard], data: {expectedRol: ['admin']}},
  {path: "tournament", component: ListTournamentsComponent, canActivate: [GameGuard], data: {expectedRol: ['admin', 'user']}},
  {path: "tournament/editar/:id", component: EditTournamentsComponent, canActivate: [GameGuard], data: {expectedRol: ['admin']}},
  {path: "tournament/agregar", component: FromTournamentsComponent, canActivate: [GameGuard], data: {expectedRol: ['admin']}},
  {path: "game/player/:id", component: ListPlayersgameComponent, canActivate: [GameGuard], data: {expectedRol: ['admin', 'user']}},
  {path: "game/tournament/:id", component: ListTournamentsgameComponent, canActivate: [GameGuard], data: {expectedRol: ['admin', 'user']}},
  {path: "login", component: LoginComponent, canActivate: [LoginGuard]},
  {path: "registro", component: RegistroComponent, canActivate: [LoginGuard]},
  {path: "**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
