export const transform = (legacy) => {
	let newmethod = {};
	for (const s in legacy) {
		legacy[s].forEach((l) => (newmethod[l.toLowerCase()] = parseInt(s)));
	}
	return newmethod;
};
