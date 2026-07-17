const isPrime = (num) => {
	for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
	return true;
};

export const prime = (n) => {
	if (n === 0) throw new Error("there is no zeroth prime");
	for (let i = 2, pc = 0; ; i++) {
		if (isPrime(i)) {
			pc++;
			if (pc === n) return i;
		}
	}
};
