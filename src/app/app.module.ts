import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile';
import { GameTimerComponent } from './game-timer';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameSetupComponent } from './game-setup';
import { Router } from '@angular/router';
import { HomeComponent } from './home';
import { GameDataComponent } from './game-data/game-data.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent
    , UserProfileComponent
    , GameTimerComponent
    , GameSetupComponent
    , HomeComponent
    , GameDataComponent
  ],
  imports: [
    BrowserModule
    , appRoutingModule
    , NgbModalModule
    , NgbModule
    , RouterModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
