export class Series {
	constructor(series) {
		if (series === "") throw new Error("series cannot be empty");
		this.s = series;
	}

	slices(sliceLength) {
		if (sliceLength === 0) throw new Error("slice length cannot be zero");
		if (sliceLength < 0) throw new Error("slice length cannot be negative");
		if (sliceLength > this.s.length)
			throw new Error("slice length cannot be greater than series length");

		let s = this.s,
			slices = [];
		for (let i = 0; i < s.length + 1 - sliceLength; ) {
			let ss = s.substring(i, i + sliceLength);
			slices.push(ss.split("").map((n) => parseInt(n)));
			if (ss.length === s.length) break;
			i += 1;
		}
		return slices;
	}
}
