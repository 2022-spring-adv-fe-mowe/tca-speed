import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { GameSetupComponent } from './game-setup';
import { GameTimerComponent } from './game-timer';
import { UserProfileComponent } from './user-profile';
import { GameDataComponent } from './game-data';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'game-setup', component: GameSetupComponent },
    { path: 'game-timer', component: GameTimerComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'game-data', component: GameDataComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: './home' }
];

export const appRoutingModule = RouterModule.forRoot(routes);