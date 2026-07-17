const PinCountException = new Error("Pin count exceeds pins on the lane");
export class Bowling {
	constructor() {
		this.rolls = [];
		this.total = 0;
		this.frames = [];
		this.gameEnded = false;
	}

	roll(score) {
		if (score < 0) throw new Error("Negative roll is invalid");
		if (score > 10) throw PinCountException;
		if (this.gameEnded) throw new Error("Cannot roll after game is over");

		// Add to frames
		let i = this.frames.length;

		if (
			i !== 10 &&
			(i === 0 || this.frames[i - 1][0] === 10 || this.frames[i - 1].length > 1)
		) {
			this.frames.push([score]);
		} else {
			this.frames[i - 1].push(score);
		}

		// Rules
		for (let fi = 0; fi < this.frames.length; fi++) {
			let cFrame = this.frames[fi];

			if (fi === 9) {
				if (cFrame.length === 3) {
					if (
						cFrame[1] !== 10 &&
						cFrame[0] + cFrame[1] !== 10 &&
						cFrame[1] + cFrame[2] > 10
					)
						throw PinCountException;
				}
			} else if (cFrame[0] + cFrame[1] > 10) throw PinCountException;
		}

		let tenth = this.frames[9];
		if (tenth && (tenth.length === 3 || tenth[0] + tenth[1] < 10))
			this.gameEnded = true;

		// Add roll
		this.rolls.push(score);
		this.total += score;
	}

	score() {
		let tenth = this.frames[9];
		if (
			this.frames.length !== 10 ||
			tenth.length < 2 ||
			((tenth[0] === 10 || tenth[0] + tenth[1] === 10) && tenth.length < 3)
		)
			throw new Error("Score cannot be taken until the end of the game");

		// Extra scores
		for (let i = 0; i < this.rolls.length - 2; i++) {
			let rolls = this.rolls.slice(0);
			if (!(i + 1 >= rolls.length - 2)) {
				if (rolls[i] === 10) {
					this.total += rolls[i + 1];
					if (i < rolls.length - 3) this.total += rolls[i + 2];
				} else if (rolls[i] + rolls[i + 1] === 10 && rolls[i] !== 0)
					this.total += rolls[i + 2];
			}
		}

		return this.total;
	}
}
