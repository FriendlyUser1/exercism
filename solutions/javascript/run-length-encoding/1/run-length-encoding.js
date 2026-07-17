/**
 * encode rle
 * @param {string} pt
 */
export const encode = (pt) => {
	if (pt === "") return pt;
	let ct = "";
	pt.match(/(.)\1*/g).map((m) => {
		ct += `${m.length > 1 ? m.length : ""}${m.split("")[0]}`;
	});
	return ct;
};

export const decode = (ct) => {
	let pt = ct;
	pt = pt.replace(/(\d+)([^\d])/g, (m) => {
		return m.at(-1).repeat(m.slice(0, -1));
	});
	return pt;
};
