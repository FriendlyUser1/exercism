export const keep = (c, filter) => {
	let r = [];
	for (let i = 0; i < c.length; i++) if (filter(c[i])) r.push(c[i]);
	return r;
};

export const discard = (c, filter) => {
	let r = [];
	for (let i = 0; i < c.length; i++) if (!filter(c[i])) r.push(c[i]);
	return r;
};
