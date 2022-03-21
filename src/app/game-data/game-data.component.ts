import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-data',
  templateUrl: './game-data.component.html',
  styleUrls: ['./game-data.component.css']
})
export class GameDataComponent implements OnInit {

  constructor( private gameDataSvc: GameDataComponent ) { }

  ngOnInit(): void {
  }

  title = 'My Game Data';

  bestTime = () => {};

  winningCount = () => {};

  winningPercentage = () => {};

  losingPercentage = () => {};

  worstTime = () => {};

  losingCount = () => {};

}
