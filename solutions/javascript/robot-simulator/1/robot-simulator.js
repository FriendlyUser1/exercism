export class InvalidInputError extends Error {
	constructor(message) {
		super();
		this.message = message || "Invalid Input";
	}
}

const dirs = ["north", "east", "south", "west"];

export class Robot {
	constructor() {
		this.direction = "north";
		this.di = 0;
		this.x = 0;
		this.y = 0;
	}

	get bearing() {
		return this.direction;
	}

	get coordinates() {
		return [this.x, this.y];
	}

	place({ x, y, direction }) {
		if (!dirs.includes(direction))
			throw new InvalidInputError("Invalid bearing");

		this.direction = direction;
		this.di = dirs.indexOf(direction);
		this.x = x;
		this.y = y;
	}

	evaluate(s) {
		s.split("").forEach((i) => {
			if (i === "A") {
				if (this.di % 2 === 0) this.y += this.di === 0 ? 1 : -1;
				else this.x += this.di === 1 ? 1 : -1;
			} else {
				this.di += i === "L" ? -1 : 1;
				if (this.di > 3 || this.di < 0) this.di = ((this.di % 4) + 4) % 4;
				this.direction = dirs[this.di];
			}
		});
	}
}
