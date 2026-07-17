export const convert = (n) => {
	let s = "";

	[3, 5, 7].forEach((f) => {
		if (n % f === 0) {
			s += `Pl${f === 3 ? "i" : f === 5 ? "a" : "o"}ng`;
		}
	});

	return s === "" ? n.toString() : s;
};
