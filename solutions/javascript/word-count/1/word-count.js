export const countWords = (str) => {
	let counts = {};
	str
		.replaceAll(/[\t\n"!.,:]/g, " ")
		.toLowerCase()
		.split(" ")
		.filter((s) => /[A-Za-z0-9]/g.test(s))
		.forEach(function (x) {
			if (x.includes("'") && !/\b'\b/g.test(x)) x = x.replaceAll("'", "");
			counts[x] = (counts[x] || 0) + 1;
		});
	return counts;
};
