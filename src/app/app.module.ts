import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GameTimerComponent } from './game-timer/game-timer.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameSetupComponent } from './game-setup/game-setup.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    GameTimerComponent,
    GameSetupComponent
  ],
  imports: [
    BrowserModule
    , NgbModalModule
    , NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
