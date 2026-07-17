export const square = (s) => {
	if (s < 1 || s > 64) throw new Error("square must be between 1 and 64");

	let t = BigInt(0);
	for (let i = 0, j = 1; i < s; i++, j *= 2) t = BigInt(j);
	return t.toString();
};

export const total = () => {
	let total = BigInt(0);
	for (let i = 1; i <= 64; i++) total += BigInt(square(i));
	return total.toString();
};
