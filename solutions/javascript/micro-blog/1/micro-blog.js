export const truncate = (input) => {
	const pointIterator = input[Symbol.iterator]();
	let point = pointIterator.next();
	let truncated = "";

	for (let i = 0; i < 5 && !point.done; i++) {
		truncated += point.value;
		point = pointIterator.next();
	}
	return truncated;
};
