export const isArmstrongNumber = (n) => {
	let t = 0;
	`${n}`.split("").forEach((i) => (t += Math.pow(i, `${n}`.length)));
	return t === n;
};
