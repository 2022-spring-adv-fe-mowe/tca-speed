import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private route: ActivatedRoute, private router: Router, private modalSvc: NgbModal, private gameSvc: GameDataService) { }

  ngOnInit(): void {
  }

  goToPage = () => {
    this.router.navigate(['/game-data']);
  }


  closeModal = () => {
    this.gameSvc.hasEmail = true;
    const modalRef = this.modalSvc.dismissAll(UserProfileComponent);
  }

}
