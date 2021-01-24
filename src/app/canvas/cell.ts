export class Cell {
    private _state = false;
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

    get state(): boolean {
        return this._state;
    }

    setFutureState(state: boolean) {
        this.futureState = state;
    }

    toggleState() {
        this._state = this.futureState = !this.futureState;
    }

    updateState() {
        this._state = this.futureState;
    }

    reset() {
        this._state = this.futureState = false;
    }
}