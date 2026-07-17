export class Palindromes {
	constructor(min, max) {
		this.min = min;
		this.max = max;
	}

	static generate(factors) {
		return new Palindromes(factors.minFactor, factors.maxFactor);
	}

	//TODO Redesign based on https://en.wikipedia.org/wiki/Palindromic_number#Decimal_palindromic_numbers

	get smallest() {
		// return this.getPalindrome(this.min, this.max, 1);
		return this.getPalindrome(this.min ** 2, 1);
	}

	get largest() {
		// return this.getPalindrome(this.max, this.min, -1);
		return this.getPalindrome(this.max ** 2, -1);
	}

	getPalindrome(ret, mut) {
		if (this.min > this.max) throw new Error("min must be <= max");

		for (
			let i = ret;
			mut > 0 ? i <= this.max ** 2 : i >= this.min ** 2;
			i += mut
		) {
			if (
				i === parseInt(i.toString().split("").reverse().join("")) &&
				this.getFactors(i).length > 0
			)
				return { value: i, factors: this.getFactors(i) };
		}
		return { value: null, factors: [] };
	}

	getFactors(n) {
		let factors = [],
			fs = Array.from(Array(n + 1), (_, i) => i).filter(
				(i) =>
					n % i === 0 && [i, n / i].every((l) => l >= this.min && l <= this.max)
			);
		if (fs.length % 2 === 1) fs.push(Math.sqrt(n));

		fs.forEach((f) => {
			factors.push([f, n / f]);
			fs.splice(fs.indexOf(f), 1);
			fs.splice(fs.indexOf(n / f), 1);
		});

		return factors;
	}
}
