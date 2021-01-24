import { Injectable } from "@angular/core";
import { Cell } from "./canvas/cell";

@Injectable()
export class GameOFLifeService {
    private cells!: Cell[];
    private rows!: number;
    private cols!: number;

    readonly MIN = 5;
    readonly rngPercent = 1000;

    initialize(rows = 10, cols = 10){
        if(rows < this.MIN || cols < this.MIN)
            throw Error("Width and height must be at least ${this.MIN}");

        this.rows = rows;
        this.cols = cols;
        this.cells;
        this.cells = Array.from({
            length: rows * cols
        }).map((_, i, a) => new Cell(Math.floor(i / this.cols), i % this.cols));
    }

    get grid(): Cell[][] {
        if(!this.cells)
            throw Error("Grid has not yet benn initialized");
        
        const grid = [];
        for (let i = 0; i < this.cells.length; i++) {
            grid.push(this.cells.slice(i * this.cols, (i + 1) * this.cols));
        }

        return grid;
    }

    randomizeGrid(chances = 0.2) {
        chances = chances * this.rngPercent;

        this.cells.forEach(cell => {
            if(Math.random() * this.rngPercent <= chances) {
                cell.toggleState();
            }
        });
    }

    updateNextGeneration() {
        const alive = true;
        this.cells.forEach(cell => {
            const aliveNeighborsCount = this.getNumberOfAliveNeighbors(cell);

            switch(aliveNeighborsCount){
                case 2:
                    break;
                case 3:
                    cell.setFutureState(alive);
                    break;
                default:
                    cell.setFutureState(!alive);
                    break;
            }
        })

        this.cells.forEach(cell => cell.updateState());
    }

    updateCells() {
        this.cells.forEach(cell => cell.updateState());
    }

    getNumberOfAliveNeighbors(cell: Cell): number {
        const row = cell.row;
        const col = cell.col;
        if(this.isOutOfBounds(cell.row, cell.col))
            throw Error("Cell is out of bound: row: ${cell.row} - ${cell.col}");

        const possibleNeighborCoords = [
            { row: row - 1, col: col },
            { row: row - 1, col: col + 1 },
            { row: row, col: col + 1 },
            { row: row + 1, col: col + 1 },
            { row: row + 1, col: col },
            { row: row + 1, col: col - 1 },
            { row: row, col: col - 1 },
            { row: row - 1, col: col - 1}
            ].filter(offset => !this.isOutOfBounds(offset.row, offset.col));
        
        return possibleNeighborCoords.map(
            coords => this.cells[coords.row * this.cols + coords.col]
            ).filter(cell => cell.state)
            .length;
    }

    isOutOfBounds(row: number, col: number): boolean {
        return row < 0 || this.rows <= row || col < 0 || this.cols <= col;
    }

    reset() {
        if (!this.cells) {
            throw Error('Grid has not yet been initialized.');
        }

        this.cells.forEach(cell => cell.reset());
    }
}