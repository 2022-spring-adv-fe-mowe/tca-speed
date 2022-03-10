import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor( private playerSvc: PlayerService, private router: Router) { }

  ngOnInit(): void {
  }

  title = "Enter your opponent's name:"

  newPlayer = "";

  addPlayer = () => {

      this.playerSvc.NewPlayers = [
        ...this.playerSvc.NewPlayers
        , this.newPlayer
      ];

      this.router.navigateByUrl('/game-setup');
  };

}
