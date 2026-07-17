export const rows = (r) => build(r);

const build = (r, t = [[1]]) => {
	if (r === 0) return [];
	if (r < 2) return t;

	let lastRow = t[t.length - 1],
		curRow = [1];
	for (let i = 1; i < lastRow.length; i++) {
		curRow[i] = lastRow[i] + lastRow[i - 1];
	}

	curRow.push(1);

	return build(r - 1, [...t, curRow]);
};
