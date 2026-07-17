export const squareRoot = (S) => {
	let sqrt = S / 2;
	let check = 0;

	while (sqrt != check) {
		check = sqrt;

		// If sqrt is the root, this will equal itself e.g. 5 = (25 / 5 + 5) / 2
		// if not, it will make it closer to the root
		sqrt = (S / sqrt + sqrt) / 2;
	}

	return sqrt;
};
