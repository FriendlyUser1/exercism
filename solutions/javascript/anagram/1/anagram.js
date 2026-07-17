export const findAnagrams = (target, candidates) => {
	let set = [],
		lss = (i) => JSON.stringify(i.toLowerCase().split("").sort()),
		t = lss(target);
	candidates.forEach((c) => {
		if (
			lss(c) === t &&
			c.toLowerCase() !== target.toLowerCase() &&
			!set.some((e) => e.toLowerCase() === c.toLowerCase())
		)
			set.push(c);
	});
	return set;
};
