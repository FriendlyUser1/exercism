export const classify = (n) => {
	if (n < 1)
		throw new Error("Classification is only possible for natural numbers.");

	let aliquot = 0;
	for (let i = 1; i < n; i++) if (n % i === 0) aliquot += i;
	return aliquot === n ? "perfect" : aliquot > n ? "abundant" : "deficient";
};
