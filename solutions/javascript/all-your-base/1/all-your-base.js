/**
 * Convert a sequence of digits from base a to base b
 * @param {Number[]} digits
 * @param {Number} a
 * @param {Number} b
 */
export const convert = (digits, a, b) => {
	if (a <= 1) throw new Error("Wrong input base");
	if (b <= 1) throw new Error("Wrong output base");

	if (
		digits.length == 0 ||
		(digits.length > 1 && digits[0] == 0) ||
		digits.some((i) => i < 0 || i >= a)
	)
		throw new Error("Input has wrong format");

	let total = digits.reduce((p, c) => p * a + c);
	let res = [];

	while (total > 0) {
		res.unshift(total % b);
		total = Math.floor(total / b);
	}

	if (res.length == 0) return [0];

	return res;
};
