export class Squares {
	constructor(n) {
		this.n = n;
	}

	get sumOfSquares() {
		let sum = 0;
		for (let i = 1; i <= this.n; i++) sum += Math.pow(i, 2);
		return sum;
	}

	get squareOfSum() {
		let sum = 0;
		for (let i = 1; i <= this.n; i++) sum += i;
		return Math.pow(sum, 2);
	}

	get difference() {
		return this.squareOfSum - this.sumOfSquares;
	}
}
