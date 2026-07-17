const COLOR_KEY = {
	black: "0",
	brown: "1",
	red: "2",
	orange: "3",
	yellow: "4",
	green: "5",
	blue: "6",
	violet: "7",
	grey: "8",
	white: "9",
};

export class ResistorColorTrio {
	constructor(colors) {
		this.colors = colors;
	}

	get label() {
		let rv = "";
		this.colors.forEach((color, i) => {
			let c = COLOR_KEY[color];
			if (!c) throw new Error(`invalid color "${color}"`);
			rv += i < 2 ? c : "0".repeat(c);
		});
		rv = parseInt(rv);
		return `Resistor value: ${rv > 1000 ? rv / 1000 : rv} ${
			rv > 1000 ? "kilo" : ""
		}ohms`;
	}
}
