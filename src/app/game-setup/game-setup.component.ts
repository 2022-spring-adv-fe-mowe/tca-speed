import { Component, OnInit } from '@angular/core';
import { OpponentService } from '../opponent.service';

interface OpponentDisplay {
  playerName: string;
  playerList: OpponentDisplay[]
}

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  constructor(private OpponentSvc : OpponentService) { }

  ngOnInit(): void {
  }

  players: OpponentDisplay[] = [];

  addNewPlayer = () => {
    
    const newPlayer: OpponentDisplay = {
      playerName: 'New Player'
      , playerList: []
    };

    this.players = [
      ...this.players
      , newPlayer
    ];

    // this.players = p.map(x => ({
    //   newPlayer: x.name
    // }));

  };

}
