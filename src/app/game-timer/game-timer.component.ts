import { Component, OnInit } from '@angular/core';

interface GameTimerInfo {

  startTime: String
  , endTime: String

}

@Component({
  selector: 'app-game-timer',
  templateUrl: './game-timer.component.html',
  styleUrls: ['./game-timer.component.css']
})
export class GameTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   timer = () => {
    let output = document.getElementById('timer');
    let starter = document.getElementById('starter');

    var running = false;
    var paused = false;
  }
}
