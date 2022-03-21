import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './user-profile';


interface DisplayOpponents {
  opponentName: string;
  newOpponent: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modalSvc: NgbModal) {}

  title = 'Speed Companion App';

  showModal = () => {
    const modalRef = this.modalSvc.open(UserProfileComponent);
}

  closeModal = () => {
    const modalRef = this.modalSvc.dismissAll(UserProfileComponent);
  }

  player2: DisplayOpponents[] = [];

  addNewOpponent = () => {
    
    const newOpponent: DisplayOpponents = {
      opponentName: 'New Opponent'
      , newOpponent: true
    };

    this.player2 = [
      ...this.player2
      , newOpponent
    ]
  }
}
