const LETTER_MAP = {
	1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
	2: ["D", "G"],
	3: ["B", "C", "M", "P"],
	4: ["F", "H", "V", "W", "Y"],
	5: ["K"],
	8: ["J", "X"],
	10: ["Q", "Z"],
};

export const score = (word) => {
	let total = 0;
	word
		.toUpperCase()
		.split("")
		.forEach((l) => {
			for (let s in LETTER_MAP) {
				if (LETTER_MAP[s].includes(l)) total += parseInt(s);
			}
		});
	return total;
};
