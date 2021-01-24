import { Component, OnInit } from '@angular/core';
import { GameOFLifeService } from '../conway.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  private intervalId?: number;
  private _isComputing = false;
  constructor(private gameOfLifeService: GameOFLifeService) { }

  ngOnInit(): void {
  }

  start() {
    this.intervalId = window.setInterval(() => {
      this.gameOfLifeService.updateNextGeneration();
    }, 100);

    this._isComputing = true;
  }

  stop() {
    window.clearInterval(this.intervalId);
    this._isComputing = false;
  }

  randomize() {
    this.gameOfLifeService.reset();
    this.gameOfLifeService.randomizeGrid();
  }

  get isComputing(): boolean {
    return this._isComputing;
  }

  reset() {
    this.stop();
    this.gameOfLifeService.reset();
  }
}
