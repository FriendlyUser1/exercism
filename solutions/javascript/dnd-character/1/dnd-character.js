export const abilityModifier = (score) => {
	if (score < 3 || score > 18)
		throw new Error(
			`Ability scores ${score < 3 ? "must be at least 3" : "can be at most 18"}`
		);
	return Math.floor((score - 10) / 2);
};

const abilities = [
	"strength",
	"dexterity",
	"constitution",
	"intelligence",
	"wisdom",
	"charisma",
];

export class Character {
	constructor() {
		for (let a of abilities) {
			this[a] = Character.rollAbility();
		}
	}

	static rollAbility() {
		let score = [0, 0, 0, 0]
			.map(() => Math.floor(Math.random() * 6) + 1)
			.sort((a, b) => a - b)
			.slice(1)
			.reduce((a, c) => a + c, 0);

		return score < 3 ? 3 : score > 18 ? 18 : score;
	}

	get hitpoints() {
		return 10 + abilityModifier(this.constitution);
	}
}
