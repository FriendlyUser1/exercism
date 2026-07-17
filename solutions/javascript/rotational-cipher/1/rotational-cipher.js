const alphabet = "abcdefghijklmnopqrstuvwxyz";

/**
 * @param {String} str
 * @param {Number} n
 * @returns {String}
 */
export const rotate = (str, n) =>
	str
		.split("")
		.map((s) => {
			let lowS = s.toLowerCase();
			if (!/[a-z]/.test(lowS)) return s;
			let rotated = alphabet[(alphabet.indexOf(lowS) + n) % 26];
			if (s !== lowS) return rotated.toUpperCase();
			return rotated;
		})
		.join("");
