import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGamesComponent } from './components/list-games/list-games.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './components/menu/menu.component';
import { FormGameComponent } from './components/form-game/form-game.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchGameComponent } from './components/search-game/search-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { ListPlayersComponent } from './components/players/list-players/list-players.component';
import { EditPlayerComponent } from './components/players/edit-player/edit-player.component';
import { FormPlayerComponent } from './components/players/form-player/form-player.component';
import { ListTournamentsComponent } from './components/tournaments/list-tournaments/list-tournaments.component';
import { EditTournamentsComponent } from './components/tournaments/edit-tournaments/edit-tournaments.component';
import { FromTournamentsComponent } from './components/tournaments/from-tournaments/from-tournaments.component';
import { ListPlayersgameComponent } from './components/players/list-playersgame/list-playersgame.component';
import { ListTournamentsgameComponent } from './components/tournaments/list-tournamentsgame/list-tournamentsgame.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent,
    MenuComponent,
    FormGameComponent,
    SearchGameComponent,
    EditGameComponent,
    ListPlayersComponent,
    EditPlayerComponent,
    FormPlayerComponent,
    ListTournamentsComponent,
    EditTournamentsComponent,
    FromTournamentsComponent,
    ListPlayersgameComponent,
    ListTournamentsgameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
