export class Triangle {
	constructor(...sides) {
		this.sides = sides;
	}

	get isEquilateral() {
		return new Set(this.sides).size === 1 && !this.sides.includes(0);
	}

	equality() {
		let s = this.sides.slice(0).sort((a, b) => a - b);
		return s[0] + s[1] >= s[2];
	}

	get isIsosceles() {
		return new Set(this.sides).size <= 2 && this.equality();
	}

	get isScalene() {
		return new Set(this.sides).size === 3 && this.equality();
	}
}
