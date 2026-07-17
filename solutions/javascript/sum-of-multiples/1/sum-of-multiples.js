export const sum = (ms, n) => {
	let t = 0;
	for (let i = 0; i < n; i++) {
		let ism = false;
		ms.forEach((m) => {
			if (!ism) ism = i % m === 0;
		});
		if (ism) t += i;
	}
	return t;
};
