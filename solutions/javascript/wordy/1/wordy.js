export const answer = (q) => {
	if (!q.startsWith("What is")) throw new Error("Unknown operation");
	q = q.slice(8, -1);
	let mul = false,
		j = 0;
	[/plus/g, /minus/g, /multiplied by/g, /divided by/g].forEach((reg, i) => {
		if (j > 1) mul = true;
		if (reg.test(q)) {
			q = q.replace(reg, ["+", "-", "*", "/"][i]);
			j++;
		}
	});
	if (/[A-z]/g.test(q)) throw new Error("Unknown operation");

	try {
		eval(q);
		if (!eval(q) || /\+ \+ |- - |\* \* |\/ \//g.test(q))
			throw new Error("Syntax error");
		else if (mul) {
			let s = q.match(/(-?\d+ (\+|-|\*|\/) \d)/)[0];
			return eval(eval(s) + q.slice(s.length));
		} else return eval(q);
	} catch (e) {
		throw new Error("Syntax error");
	}
};
