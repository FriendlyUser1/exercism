export const proverb = (...rl) => {
	if (rl.length === 0) return "";

	let pro = "",
		q = rl[rl.length - 1].qualifier;

	if (rl.length > 1) {
		for (let i = 0; i < rl.length - 1; i++) {
			if (!rl[i + 1].qualifier)
				pro += `For want of a ${rl[i]} the ${rl[i + 1]} was lost.\n`;
		}
	}

	return pro + `And all for the want of a ${q ? q + " " : ""}${rl[0]}.`;
};
