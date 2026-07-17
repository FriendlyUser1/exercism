export const tournamentTally = (data) => {
	if (!data) return "Team                           | MP |  W |  D |  L |  P";

	let table = "",
		datalist = data.split("\n"),
		statlist = {},
		order = [];

	for (let i = 0; i < datalist.length; i++) {
		for (let j = 0; j < 2; j++) {
			let res = datalist[i].split(";"),
				stats = statlist[res[j]] ?? { mp: 0, w: 0, d: 0, l: 0, p: 0 },
				isnew = true,
				place =
					j === 0 || res[2] === "draw"
						? res[2]
						: res[2] === "win"
						? "loss"
						: "win";

			stats.mp++;

			switch (place) {
				case "win":
					stats.w++;
					stats.p += 3;
					break;
				case "draw":
					stats.d++;
					stats.p++;
					break;
				case "loss":
					stats.l++;
					break;
			}

			statlist[res[j]] = stats;

			order.forEach((s) => {
				if (s.name === res[j]) {
					s.score = stats.p;
					isnew = false;
				}
			});
			if (isnew) order.push({ name: res[j], score: stats.p });
		}
	}

	order = order.sort((a, b) => {
		return b.score - a.score !== 0
			? b.score - a.score
			: a.name.localeCompare(b.name);
	});

	for (let k = 0; k < order.length; k++) {
		let s = statlist[order[k].name];
		table += `\n${order[k].name}${" ".repeat(31 - order[k].name.length)}|  ${
			s.mp
		} |  ${s.w} |  ${s.d} |  ${s.l} |${" ".repeat(3 - s.p.toString().length)}${
			s.p
		}`;
	}

	return "Team                           | MP |  W |  D |  L |  P" + table;
};
