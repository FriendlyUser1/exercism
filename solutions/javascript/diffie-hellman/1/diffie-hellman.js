export class DiffieHellman {
	constructor(p, g) {
		let isPrime = (n) => {
			for (var i = 2; i < n; i++) {
				if (n % i === 0) return false;
			}
			return n > 1;
		};

		if (p <= 2 || g <= 2) throw "Arguments out of range";
		if (!isPrime(p) || !isPrime(g)) throw "Arguments not prime";

		this.p = p;
		this.g = g;
	}

	getPublicKey(privateKey) {
		if (privateKey <= 2 || privateKey >= this.p)
			throw "Private key out of range";

		return this.g ** privateKey % this.p;
	}

	getSecret(theirPublicKey, myPrivateKey) {
		return theirPublicKey ** myPrivateKey % this.p;
	}
}
