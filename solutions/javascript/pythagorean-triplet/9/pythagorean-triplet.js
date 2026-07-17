export const triplets = ({ minFactor = 1, maxFactor, sum }) => {
	let n = sum,
		triplets = [];
	maxFactor = maxFactor ?? n;

	for (let b = 2; b < maxFactor; b++) {
		for (let a = minFactor; a < b; a++) {
			let c = n - a - b;
			if (a + b + c === n && c < maxFactor && a * a + b * b === c * c)
				triplets.unshift(new Triplet(a, b, c));
		}
	}

	return triplets;
};

class Triplet {
	constructor(a, b, c) {
		this.triplet = [a, b, c];
	}

	toArray() {
		return this.triplet;
	}
}
