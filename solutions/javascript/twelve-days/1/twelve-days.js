export const recite = (start, end) => {
	end = end ?? start;
	let verses = "",
		lines = [
			["first", "and a Partridge in a Pear Tree."],
			["second", "two Turtle Doves, "],
			["third", "three French Hens, "],
			["fourth", "four Calling Birds, "],
			["fifth", "five Gold Rings, "],
			["sixth", "six Geese-a-Laying, "],
			["seventh", "seven Swans-a-Swimming, "],
			["eighth", "eight Maids-a-Milking, "],
			["ninth", "nine Ladies Dancing, "],
			["tenth", "ten Lords-a-Leaping, "],
			["eleventh", "eleven Pipers Piping, "],
			["twelfth", "twelve Drummers Drumming, "],
		];

	for (let i = start - 1; i < end; i++) {
		let gifts = `On the ${lines[i][0]} day of Christmas my true love gave to me: `;
		if (i === 0) gifts += lines[0][1].slice(4);
		else for (let j = i; j >= 0; j--) gifts += lines[j][1];
		verses += gifts + (i === end - 1 ? "\n" : "\n\n");
	}
	return verses;
};
