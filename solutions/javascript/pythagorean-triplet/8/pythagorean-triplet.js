export const triplets = ({ minFactor, maxFactor, sum }) => {
	let n = sum,
		min = minFactor ?? 1,
		max = maxFactor ?? n,
		triplets = [];

	for (let b = 2; b < max; b++) {
		for (let a = min; a < b; a++) {
			let c = n - a - b;
			if (a + b + c === n && c < max && a * a + b * b === c * c)
				triplets.unshift(new Triplet(a, b, c));
		}
	}

	return triplets;
};

class Triplet {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	}

	toArray() {
		return [this.a, this.b, this.c];
	}
}
