export const recite = (initialBottlesCount, takeDownCount) => {
	let verses = [];
	for (let i = 0; i < takeDownCount; i++) {
		let plural = (o) =>
				initialBottlesCount - i - o === 1 ? "bottle" : "bottles",
			currentBottle = initialBottlesCount - i,
			last = currentBottle === 1,
			none = currentBottle ? currentBottle.toString() : "No more";

		verses.push(
			`${none} ${plural(0)} of beer on the wall, ${none.toLowerCase()} ${plural(
				0
			)} of beer.`,
			currentBottle
				? `Take ${last ? "it" : "one"} down and pass it around, ${
						last ? "no more" : currentBottle - 1
				  } ${plural(1)} of beer on the wall.`
				: "Go to the store and buy some more, 99 bottles of beer on the wall."
		);
		if (i < takeDownCount - 1) verses.push("");
	}

	return verses;
};
