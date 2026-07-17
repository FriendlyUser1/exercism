export class Change {
	calculate(coinArray, target) {
		if (target < 0) {
			throw new Error("Negative totals are not allowed.");
		}

		const change = [[]];

		for (let i = 0; i < target; ++i) {
			if (!change[i]) continue;
			coinArray.forEach((c) => {
				const cs = [...change[i], c];
				if (!change[c + i] || cs.length < change[c + i].length) {
					change[c + i] = cs;
				}
			});
		}

		if (!change[target]) {
			throw new Error(
				`The total ${target} cannot be represented in the given currency.`
			);
		}

		return change[target];
	}
}
