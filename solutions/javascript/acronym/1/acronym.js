export const parse = (str) => {
	return str
		.replaceAll(/[,\-_]/g, " ")
		.split(" ")
		.filter((s) => s !== "")
		.map((s) => s.charAt(0))
		.join("")
		.toUpperCase();
};
