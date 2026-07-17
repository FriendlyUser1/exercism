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
		let value = "",
			unit = "ohms";

		this.colors.forEach((color, i) => {
			if (!COLOR_KEY[color]) throw new Error(`invalid color "${color}"`);

			if (i < 2) value += COLOR_KEY[color];
			else {
				value += "0".repeat(COLOR_KEY[color]);
				if (value.length > 3) {
					value = (parseInt(value) / 1000).toString();
					unit = "kiloohms";
				}
			}
		});

		return `Resistor value: ${parseInt(value)} ${unit}`;
	}
}
