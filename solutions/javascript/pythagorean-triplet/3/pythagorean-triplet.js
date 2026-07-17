export const triplets = ({ max, min, n }) => {
	min = min ?? 1;
	max = max ?? n;
	let triplets = [];

	for (let c = 3; c <= n; c++) {
		for (let b = 2; b < c; b++) {
			for (let a = min; a < b; a++) {
				if (a + b + c === n && a < b && b < c && a * a + b * b === c * c)
					triplets.push(new Triplet(a, b, c));
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
