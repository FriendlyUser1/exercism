export const isPangram = (str) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	str
		.toLowerCase()
		.split("")
		.forEach((c) => {
			if (alphabet.includes(c)) alphabet.splice(alphabet.indexOf(c), 1);
		});
	return alphabet.length === 0;
};
