export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    this.black = [blackRow, blackColumn];
    this.white = [whiteRow, whiteColumn];

    if (blackRow === whiteRow && blackColumn === whiteColumn)
      throw new Error("Queens cannot share the same space");

    if (
      Math.min(...this.black, ...this.white) < 0 ||
      Math.max(...this.black, ...this.white) > 7
    )
      throw new Error("Queen must be placed on the board");
  }

  toString() {
    let board = Array.from({ length: 8 }, () => Array(8).fill("_"));
    board[this.black[0]][this.black[1]] = "B";
    board[this.white[0]][this.white[1]] = "W";
    return board.map((r) => r.join(" ")).join("\n");
  }

  get canAttack() {
    return (
      this.black[0] === this.white[0] ||
      this.black[1] === this.white[1] ||
      Math.abs(this.black[0] - this.white[0]) ===
        Math.abs(this.black[1] - this.white[1])
    );
  }
}
