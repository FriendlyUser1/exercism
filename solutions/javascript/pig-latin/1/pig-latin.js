// A needlessly convoluted and unreadable pig-latin solution :)

class PigLatin {
	constructor(regex, vowel = false) {
		this.rule = new RegExp(`^([${vowel ? "" : "^"}aeiou]${regex})(.+)?`);
	}

	test(str) {
		return this.rule.test(str);
	}

	replace(str, pattern) {
		return str.replace(this.rule, pattern);
	}
}

const rule1 = new PigLatin("|xr|yt", true),
	rule2 = new PigLatin("+"),
	rule3 = new PigLatin("{0,}qu"),
	rule4 = new PigLatin("+?)(y");

/**
 * Translates a string to Pig Latin
 * @param {string} english
 * @returns {string}
 */
export const translate = (english) => {
	return english
		.split(" ")
		.map((w) => {
			for (let i = 0; i < 4; i++) {
				let rule = [rule4, rule1, rule3, rule2][i];
				if (rule.test(w))
					return rule.replace(w, ["$2$3$1ay", "$1$2ay", "$2$1ay", "$2$1ay"][i]);
			}

			return w;
		})
		.join(" ");
};
