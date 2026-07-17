export class Rational {
	constructor(n, d) {
		(this.n = n), (this.d = d);
	}

	add(r, s = "+") {
		let n2 = eval(`this.n * r.d ${s} r.n * this.d`);
		return new Rational(n2, n2 !== 0 ? this.d * r.d : 1);
	}

	sub(r) {
		return this.add(r, "-");
	}

	mul(r) {
		return new Rational(this.n * r.n, this.d * r.d).reduce();
	}

	div(r) {
		return this.mul(new Rational(r.d, r.n));
	}

	abs() {
		return new Rational(Math.abs(this.n), Math.abs(this.d));
	}

	exprational(x) {
		return new Rational(Math.pow(this.n, x), Math.pow(this.d, x));
	}

	expreal(x) {
		let ans = Math.pow(x ** this.n, 1 / this.d);
		return Math.ceil(ans) - ans < 0.01 ? Math.ceil(ans) : ans;
	}

	gcd(a, b) {
		return !b ? a : this.gcd(b, ((a % b) + b) % b);
	}

	reduce() {
		let gcd = this.gcd(this.n, this.d);
		return new Rational(this.n / gcd, this.d / gcd);
	}
}
