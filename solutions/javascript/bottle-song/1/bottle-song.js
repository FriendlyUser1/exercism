const numerals = [
	"no",
	"One",
	"Two",
	"Three",
	"Four",
	"Five",
	"Six",
	"Seven",
	"Eight",
	"Nine",
	"Ten",
];

export const recite = (numBottles, numVerses) => {
	if (numBottles > 10 || numVerses > numBottles)
		throw RangeError("Invalid input");

	let lyrics = [];

	const bottleStrings = () => [
		numerals[numBottles],
		numBottles !== 1 ? "bottles" : "bottle",
	];

	const getLine = (lineNum = 1) => {
		let bs = bottleStrings();

		if (lineNum > 3)
			return `There'll be ${bs[0].toLowerCase()} green ${bs[1]} hanging on the wall.`;

		if (lineNum < 3) return `${bs[0]} green ${bs[1]} hanging on the wall,`;

		numBottles--;
		return "And if one green bottle should accidentally fall,";
	};

	while (numVerses > 0) {
		for (let line = 1; line < 5; line++) lyrics.push(getLine(line));

		numVerses--;

		if (numVerses > 0) lyrics.push("");
	}

	return lyrics;
};
