const ROMANS = {
	1000: "M",
	900: "CM",
	500: "D",
	400: "CD",
	100: "C",
	90: "XC",
	50: "L",
	40: "XL",
	10: "X",
	9: "IX",
	5: "V",
	4: "IV",
	1: "I",
};

export const toRoman = (n) => {
	let numerals = "",
		keys = Object.keys(ROMANS);
	keys.reverse();

	while (n > 0) {
		for (let i = 0; i < keys.length; i++) {
			let key = parseInt(keys[i]);
			if (n >= key) {
				numerals += ROMANS[key];
				n -= key;
				break;
			}
		}
	}
	return numerals;
};
