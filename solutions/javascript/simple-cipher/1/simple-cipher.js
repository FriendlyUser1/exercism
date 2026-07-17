export class Cipher {
	constructor(key) {
		this.alpha = "abcdefghijklmnopqrstuvwxyz".split("");
		let s = this.alpha.join("");
		this.cipherkey = (
			key ??
			Array.apply(null, Array(100))
				.map(function () {
					return s.charAt(Math.floor(Math.random() * s.length));
				})
				.join("")
		).split("");
	}

	encode(pt) {
		let a = this.alpha,
			p = pt.split(""),
			k = this.cipherkey,
			ct = "";

		for (let i = 0; i < p.length; i++) {
			ct += a[(a.indexOf(p[i]) + a.indexOf(k[i % k.length])) % 26];
		}

		return ct;
	}

	decode(pt) {
		let a = this.alpha,
			p = pt.split(""),
			k = this.cipherkey,
			ct = "";

		for (let i = 0; i < p.length; i++) {
			ct += a[(a.indexOf(p[i]) - a.indexOf(k[i % k.length]) + 26) % 26];
		}

		return ct;
	}

	get key() {
		return this.cipherkey.join("");
	}
}
