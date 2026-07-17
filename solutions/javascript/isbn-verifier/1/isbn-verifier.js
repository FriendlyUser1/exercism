export const isValid = (isbn) => {
	let check = isbn.slice(-1),
		digits = isbn.replaceAll("-", "").slice(0, -1),
		count = 0,
		ir = digits.split("");

	if (/([^0-9X])/g.test(check) || digits.length !== 9) return false;

	for (let i = 0, j = 10; i < digits.length; i++, j--)
		count += parseInt(ir[i]) * j;

	return (count + (parseInt(check) || 10)) % 11 === 0;
};
