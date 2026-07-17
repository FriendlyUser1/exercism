export function timeToMixJuice(name) {
	let time = 0;
	switch (name) {
		case "Pure Strawberry Joy":
			time = 0.5;
			break;
		case "Energizer":
		case "Green Garden":
			time = 1.5;
			break;
		case "Tropical Island":
			time = 3;
			break;
		case "All or Nothing":
			time = 5;
			break;
		default:
			time = 2.5;
			break;
	}
	return time;
}

export function limesToCut(wedgesNeeded, limes) {
	let cut = 0;
	while (wedgesNeeded > 0) {
		cut++;
		switch (limes[cut]) {
			case "small":
				wedgesNeeded -= 6;
				break;
			case "medium":
				wedgesNeeded -= 8;
				break;
			case "large":
				wedgesNeeded -= 10;
				break;
		}
	}
	return cut;
}

export function remainingOrders(timeLeft, orders) {
	while (timeLeft > 0) {
		timeLeft -= timeToMixJuice(orders[0]);
		orders.splice(0, 1);
	}
	return orders;
}
