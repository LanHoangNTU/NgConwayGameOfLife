import { Component, Input, OnInit } from '@angular/core';
import { Cell } from './cell';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  @Input() rows!: number;
  @Input() cols!: number;
  grid?: Cell[][];

  constructor() { }

  ngOnInit(): void {
  }

}
