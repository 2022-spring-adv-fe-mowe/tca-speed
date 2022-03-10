import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

interface PlayerDisplay {
  playerName: string;
  playerList: PlayerDisplay[]
}

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  constructor(private PlayerSvc : PlayerService) { }

  ngOnInit(): void {
    this.availablePlayers = this.PlayerSvc.NewPlayers;
  }

  title = "Choose your Opponent wisely..."

  availablePlayers: string[] = [];
  players: PlayerDisplay[] = [];

  addNewPlayer = () => {
    
    const newPlayer: PlayerDisplay = {
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
