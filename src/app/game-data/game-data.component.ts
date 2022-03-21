import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-game-data',
  templateUrl: './game-data.component.html',
  styleUrls: ['./game-data.component.css']
})
export class GameDataComponent implements OnInit {

  constructor( private gameDataSvc: GameDataService) { }

  ngOnInit(): void {
  }

  title = 'My Game Data';

  gameData = "No Game Data to Display :-(("

  bestTime = () => {

    this.gameDataSvc.NewGameData = [
      this.gameData
    ];
  };

  winningCount = () => {};

  winningPercentage = () => {};

  losingPercentage = () => {};

  worstTime = () => {};

  losingCount = () => {};

}
