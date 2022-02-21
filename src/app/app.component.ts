import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
  };
}
