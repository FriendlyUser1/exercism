export const triplets = ({ minFactor = 1, maxFactor, sum }) => {
	let triplets = [];
	for (let c = ~~(sum / 3 + 1); c < Math.min(sum / 2, maxFactor ?? sum); c++) {
		let absq = c * c - sum * sum + 2 * sum * c;
		let ab = ~~Math.sqrt(absq);
		if (ab * ab === absq) {
			let b = (sum - c + ab) / 2;
			let a = sum - b - c;
			if (a > minFactor) triplets.unshift(new Triplet(a, b, c));
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