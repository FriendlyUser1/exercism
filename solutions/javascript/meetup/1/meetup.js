export const meetup = (year, month, desc, day) => {
	let calc = 1, isTarget = i => new Intl.DateTimeFormat("en-GB", { weekday: "long" }).format(
					new Date(`${year}-${month}-${i}`)
				) === day

	if (desc === "teenth") {
		for (let i = 13; i <= 19; i++) {
			if (
				isTarget(i)
			) {
				calc = i;
				break;
			}
		}
	} else if (desc === "last") {
		let ld = new Date(year, month, 0).getDate();
		for (let i = ld; i > ld - 7; i--) {
			if (
				isTarget(i)
			) {
				calc = i;
				break;
			}
		}
	} else {
		let dayOf = ["first", "second", "third", "fourth"].indexOf(desc)+1, counter=0;
		for (let i = 1; i <= dayOf*7; i++) {
			if (isTarget(i)) {
				counter++
				calc = i;
				if (counter === dayOf) break;
			}
		}
	}

	return new Date(year, month - 1, calc);
};
