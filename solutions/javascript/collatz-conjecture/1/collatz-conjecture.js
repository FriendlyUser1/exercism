export const steps = (n) => {
	if (n < 1) throw new Error("Only positive numbers are allowed");

	let c = 0;

	while (n !== 1) {
		if (n % 2 === 0) n /= 2;
		else n = n * 3 + 1;
		c++;
	}

	return c;
};
