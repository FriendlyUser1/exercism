export function triplets(o) {
	let minFactor = o.minFactor ?? 1,
		maxFactor = o.maxFactor ?? o.sum,
		sum = o.sum,
		triplets = [];

	for (let a = minFactor; a < (sum + 2) / 3; a += 1) {
		for (let b = a + 1; b < (sum - a + 1) / 2; b += 1) {
			const c = sum - a - b;

			if (c <= maxFactor && a ** 2 + b ** 2 === c ** 2) {
				triplets.push(new Triplet(a, b, c));
			}
		}
	}

	return triplets;
}

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
