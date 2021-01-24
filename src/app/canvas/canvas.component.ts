import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Cell } from './cell';
import { GameOFLifeService } from '../conway.service';
import { query } from '@angular/animations';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @Input() rows!: number;
  @Input() cols!: number;
  grid?: Cell[][];

  constructor(private gameOFLifeService: GameOFLifeService) { }

  ngOnInit(): void {
    this.grid = this.gameOFLifeService.grid;
    
  }

  toggleState(cell: Cell){
    cell.toggleState();
  }

}
