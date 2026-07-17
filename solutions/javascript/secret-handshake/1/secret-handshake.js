export const commands = (shake) => {
	let re = false,
		comms = [],
		keys = [8, 4, 2, 1];

	if (shake >= 16) {
		re = true;
		shake -= 16;
	}

	while (shake > 0) {
		for (let i = 0; i < keys.length; i++) {
			let key = keys[i];
			if (shake >= key) {
				comms.push(["jump", "close your eyes", "double blink", "wink"][i]);
				shake -= key;
				break;
			}
		}
	}

	if (!re) comms.reverse();

	return comms;
};
