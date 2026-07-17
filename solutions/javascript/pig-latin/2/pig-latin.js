// The boring pig-latin solution ;)

/**
 * Translates a string to Pig Latin
 * @param {string} english
 * @returns {string}
 */
export const translate = (str) => {
	if (str.split(" ").length > 1)
		return str
			.split(" ")
			.map((w) => translate(w))
			.join(" ");

	const rule1 = new RegExp("^([aeiou]|xr|yt)(.+)?");
	const rule2 = new RegExp("^([^aeiou]+)(.+)?");
	const rule3 = new RegExp("^([^aeiou]{0,}qu)(.+)");
	const rule4 = new RegExp("^([^aeiou]+?)(y)(.+)?");

	if (rule4.test(str)) return str.replace(rule4, "$2$3$1ay");
	if (rule1.test(str)) return str.replace(rule1, "$1$2ay");
	if (rule3.test(str)) return str.replace(rule3, "$2$1ay");
	if (rule2.test(str)) return str.replace(rule2, "$2$1ay");
	return str;
};
