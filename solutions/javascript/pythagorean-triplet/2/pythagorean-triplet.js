export const triplets = ({ max, min, n }) => {
	min = min ?? 2;
	max = max ?? n;

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
