export const eggCount = (display) =>
	[...display.toString(2)].filter((n) => n == "1").length;
