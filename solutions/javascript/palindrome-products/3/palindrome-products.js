export class Palindromes {
	constructor({ minFactor, maxFactor }) {
		(this.min = minFactor), (this.max = maxFactor);
		(this.mini = this.min ** 2), (this.maxi = this.max ** 2);
		if (this.min > this.max) throw new Error("min must be <= max");
	}

	static generate(factors) {
		return new Palindromes(factors);
	}

	get smallest() {
		return this.getPalindrome(this.mini, 1);
	}

	get largest() {
		return this.getPalindrome(this.maxi, -1);
	}

	getPalindrome(ret, mut) {
		for (let i = ret; i <= this.maxi && i >= this.mini; i += mut) {
			if (String(i) === [...i.toString()].reverse().join("")) {
				let fs = this.getFactors(i);
				if (fs.length > 0) return { value: i, factors: fs };
			}
		}
		return { value: null, factors: [] };
	}

	getFactors(n) {
		let factors = [];

		// Factors above min and below max, and doesn't repeat other way
		for (let i = this.min; i <= Math.min(this.max, Math.sqrt(n)); i++) {
			if (n % i === 0 && n / i >= this.min && n / i <= this.max)
				factors.push([i, n / i]);
		}

		return factors;
	}
}
