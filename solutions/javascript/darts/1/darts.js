export const score = (x, y) => {
	let d = Math.sqrt(x * x + y * y);
	return d <= 10 ? (d <= 5 ? (d <= 1 ? 10 : 5) : 1) : 0;
};
