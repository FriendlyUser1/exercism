const CK = [
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

export function decodedResistorValue(colors: string[]): string {
	let ohms = parseInt(
			`${CK.indexOf(colors[0])}${CK.indexOf(colors[1])}${"0".repeat(
				CK.indexOf(colors[2])
			)}`
		),
		kilo = ohms > 1000;
	return `${kilo ? ohms / 1000 : ohms} ${kilo ? "kilo" : ""}ohms`;
}
