/**
 * Transpose text from a given array
 * @param {String[]} input
 * @returns
 */
export const transpose = (input) => {
	// Find the longest string in the array.
	let longer = input.reduce((a, b) => (a.length > b.length ? a : b), "").length;

	// Create an array of empty strings.
	let res = Array.from(Array(longer)).map(() => "");

	// For each string in the input:
	for (let i = 0; i < input.length; i++) {
		// Split it into characters...
		let splitCur = input[i].split("");

		for (let j = 0; j < splitCur.length; j++) {
			res[j] = res[j].padEnd(i, " ");

			// ...and add it to the end array
			res[j] += splitCur[j];
		}
	}

	return res;
};
