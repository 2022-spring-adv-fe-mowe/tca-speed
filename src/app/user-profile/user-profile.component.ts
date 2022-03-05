import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  goToPage = () => {
    this.router.navigate(['/game-data']);
  }

}
