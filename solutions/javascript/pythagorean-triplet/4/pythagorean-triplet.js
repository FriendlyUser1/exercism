export const triplets = ({ minFactor, maxFactor, sum }) => {
	let n = sum,
		min = minFactor ?? 1,
		max = maxFactor ?? n,
		triplets = [];

	for (let c = 3; c <= n; c++) {
		for (let b = 2; b < c; b++) {
			for (let a = min; a < b; a++) {
				// console.log(a, b, c);
				if (a + b + c === n && a < b && b < c && a * a + b * b === c * c)
					triplets.unshift(new Triplet(a, b, c));
			}
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
