/**
 * Calculate yacht score from given dice and category
 * @param {Number[]} dice
 * @param {String} category
 */
export const score = (dice, category) => {
	dice = dice.sort();

	let n1 = dice.filter((i) => i == dice[0]),
		n2 = dice.filter((i) => i == dice.at(-1)),
		n1l = n1.length,
		n2l = n2.length;

	const simple = (n) => {
		return dice.filter((i) => i == n).length * n;
	};

	const total = (d) => d.reduce((p, c) => p + c);

	switch (category) {
		case "ones":
			return simple(1);
		case "twos":
			return simple(2);
		case "threes":
			return simple(3);
		case "fours":
			return simple(4);
		case "fives":
			return simple(5);
		case "sixes":
			return simple(6);
		case "full house":
			return (n1l == 3 && n2l == 2) || (n1l == 2 && n2l == 3) ? total(dice) : 0;
		case "four of a kind":
			if (dice.every((i) => i == dice[0])) return total(dice.slice(1));
			return n1l >= 4 ? total(n1) : n2l >= 4 ? total(n2) : 0;
		case "little straight":
			return JSON.stringify(dice) == JSON.stringify([1, 2, 3, 4, 5]) ? 30 : 0;
		case "big straight":
			return JSON.stringify(dice) == JSON.stringify([2, 3, 4, 5, 6]) ? 30 : 0;
		case "choice":
			return total(dice);
		case "yacht":
			return dice.every((i) => i == dice[0]) ? 50 : 0;
	}
};
