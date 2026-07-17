const BRACKETS = {
	"(": ")",
	"{": "}",
	"[": "]",
};

export const isPaired = (str) => {
	let brackets = str.match(/[([{}\])]/g) || [];
	const bracketStack = [];
	return (
		brackets.every((bracket) =>
			BRACKETS[bracket]
				? bracketStack.push(bracket)
				: BRACKETS[bracketStack.pop()] === bracket
		) && bracketStack.length === 0
	);
};
