// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
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
	}
	return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
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

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
	while (timeLeft > 0) {
		timeLeft -= timeToMixJuice(orders[0]);
		orders.splice(0, 1);
	}
	return orders;
}
