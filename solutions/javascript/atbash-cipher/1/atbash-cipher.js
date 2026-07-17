const num = "0123456789";
const abc = "abcdefghijklmnopqrstuvwxyz" + num;
const zyx = "zyxwvutsrqponmlkjihgfedcba" + num;

/**
 * Encode string to atbash cipher
 * @param {string} str plaintext
 * @returns {string} ciphertext
 */
export const encode = (str) => {
	let space = 4;

	return str
		.replace(/\W/g, "")
		.toLowerCase()
		.split("")
		.map((s, i) => {
			let ct = zyx[abc.indexOf(s)];

			if (i === space) {
				ct += " ";
				space += 5;
			}

			return ct;
		})
		.join("")
		.trim();
};

/**
 * Decode atbash cipher string
 * @param {string} str ciphertext
 * @returns {string} plaintext
 */
export const decode = (str) =>
	str
		.replaceAll(" ", "")
		.toLowerCase()
		.split("")
		.map((s) => abc[zyx.indexOf(s)])
		.join("");
