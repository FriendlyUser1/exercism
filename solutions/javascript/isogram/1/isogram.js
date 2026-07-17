export const isIsogram = (s) => {
	return !/([\w]).*\1/.test(s.toLowerCase());
};
