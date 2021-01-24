export class Cell {
    private state = false;
    private futureState = false;

    private _row: number;
    private _col: number;

    constructor(row: number, col: number) {
        this._row = row;
        this._col = col;
    }

    get row(): number {
        return this._row;
    }

    get col(): number {
        return this._col;
    }

    isAlive(): boolean {
        return this.state;
    }

    setFutureState(state: boolean) {
        this.futureState = state;
    }

    toggleState() {
        this.state = this.futureState = !this.futureState;
    }

    updateState() {
        this.state = this.futureState;
    }

    reset() {
        this.state = this.futureState = false;
    }
}