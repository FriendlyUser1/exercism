export class Allergies {
	constructor(score) {
		this.score = score;
		while (this.score > 256) this.score -= 256;
		this.aobj = {
			1: "eggs",
			2: "peanuts",
			4: "shellfish",
			8: "strawberries",
			16: "tomatoes",
			32: "chocolate",
			64: "pollen",
			128: "cats",
		};
		this.alist = [];
		let k = Object.keys(this.aobj).reverse();
		while (this.score > 0) {
			k.forEach((n) => {
				if (n <= this.score) {
					this.score -= n;
					if (!this.alist.includes(this.aobj[n])) this.alist.push(this.aobj[n]);
				}
			});
		}
	}

	list() {
		return this.alist.slice(0).reverse();
	}

	allergicTo(item) {
		return this.alist.includes(item);
	}
}
