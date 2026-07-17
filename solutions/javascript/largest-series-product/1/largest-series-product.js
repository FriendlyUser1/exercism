const product = (s) =>
	s.includes("0") ? 0 : s.split("").reduce((p, c) => p * c, 1);

export const largestProduct = (s, n) => {
	if (s.length < n) throw new Error("Span must be smaller than string length");
	if (n === 0 || s.length < 1) return 1;
	if (n < 0) throw new Error("Span must be greater than zero");
	if (s.split("").some((c) => isNaN(c)))
		throw new Error("Digits input must only contain digits");
	let largest = 0,
		ss = "",
		pn = 0;

	for (let start = 0, end = n; end <= s.length; start++, end++) {
		ss = s.substring(start, end);
		pn = product(ss);
		if (pn > largest) largest = pn;
	}

	return largest;
};
