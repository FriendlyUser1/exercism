export class HighScores {
	constructor(board) {
		this.board = board;
	}

	get scores() {
		return this.board;
	}

	get latest() {
		return this.board[this.board.length - 1];
	}

	get personalBest() {
		return Math.max(...this.board);
	}

	get personalTopThree() {
		let b = this.board.slice(0);
		let max = () => b.splice(b.indexOf(Math.max(...b)), 1);
		return [...max(), ...max(), ...max()];
	}
}
