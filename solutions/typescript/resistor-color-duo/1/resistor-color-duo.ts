const COLOR_KEY = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
];

export function decodedValue(colors: string[]): number {
	return parseInt(
		`${COLOR_KEY.indexOf(colors[0])}${COLOR_KEY.indexOf(colors[1])}`
	);
}
