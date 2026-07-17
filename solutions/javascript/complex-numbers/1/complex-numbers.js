export class ComplexNumber {
	/**
	 * @param {number} a real
	 * @param {number} b imaginary
	 */
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	get real() {
		return this.a;
	}

	get imag() {
		return this.b;
	}

	add(complex) {
		return new ComplexNumber(this.a + complex.a, this.b + complex.b);
	}

	sub(complex) {
		return new ComplexNumber(this.a - complex.a, this.b - complex.b);
	}

	div(complex) {
		let s = complex.a ** 2 + complex.b ** 2;
		return new ComplexNumber(
			(this.a * complex.a + this.b * complex.b) / s,
			(this.b * complex.a - this.a * complex.b) / s
		);
	}

	mul(complex) {
		return new ComplexNumber(
			this.a * complex.a - this.b * complex.b,
			this.b * complex.a + this.a * complex.b
		);
	}

	get abs() {
		return Math.sqrt(Math.abs(this.a) ** 2 + Math.abs(this.b) ** 2);
	}

	get conj() {
		return new ComplexNumber(this.a, parseInt(-this.b));
	}

	get exp() {
		return new ComplexNumber(
			Math.E ** this.a * Math.cos(this.b) + Math.sin(this.b),
			0
		);
	}
}
