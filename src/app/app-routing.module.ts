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

const routes: Routes = [
  {path: "game", component: ListGamesComponent},
  {path: "game/agregar", component: FormGameComponent},
  {path: "game/buscar/:game", component: SearchGameComponent},
  {path: "game/editar/:id", component: EditGameComponent},
  {path: "player", component: ListPlayersComponent},
  {path: "player/editar/:id", component: EditPlayerComponent},
  {path: "player/agregar", component: FormPlayerComponent},
  {path: "tournament", component: ListTournamentsComponent},
  {path: "tournament/editar/:id", component: EditTournamentsComponent},
  {path: "tournament/agregar", component: FromTournamentsComponent},
  {path: "game/player/:id", component: ListPlayersgameComponent},
  {path: "game/tournament/:id", component: ListTournamentsgameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
