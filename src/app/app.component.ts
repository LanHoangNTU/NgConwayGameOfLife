import { Component, OnInit } from '@angular/core';
import { GameOFLifeService } from './conway.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'NgConwayGameOfLife';
  rows = 50;
  cols = 50;

  constructor(private gameOFLifeService: GameOFLifeService) { } 

  ngOnInit(): void {
    this.gameOFLifeService.initialize(this.rows, this.cols);
  }
}
