const COLOUR_MAP = {
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

export const decodedValue = (colArr) => {
	return parseInt(COLOUR_MAP[colArr[0]] + COLOUR_MAP[colArr[1]]);
};
