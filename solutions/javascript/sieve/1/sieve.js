export const primes = (limit) => {
	// Create list from 2 to limit,
	let unmarked = [];
	for (let n = 2; n <= limit; n++) unmarked.push(n);

	// For each of the numbers...
	for (let i = 0; i < unmarked.length; i++) {
		let n = unmarked[i];

		// ...that are still unmarked,
		if (!n) continue;

		// Mark the multiples of n, starting with the square.
		// (Since multiples from 2(n) to n-1(n) have already been tested)
		for (let j = n * n - 2; j < limit - 1; j += n) unmarked[j] = 0;
	}

	return unmarked.filter((n) => n > 0);
};
