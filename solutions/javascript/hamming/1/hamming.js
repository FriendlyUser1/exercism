export const compute = (s1, s2) => {
	if (s1.length !== s2.length)
		throw new Error("strands must be of equal length");

	let h = 0;

	for (let i = 0; i < s1.length; i++)
		if (s1.split("")[i] !== s2.split("")[i]) h++;

	return h;
};
