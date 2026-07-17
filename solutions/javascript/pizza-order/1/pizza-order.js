/// <reference path="./global.d.ts" />
//
// @ts-check

/*
You run a pizza shop, and offer three types of pizzas:

    Margherita: $7
    Caprese: $9
    Formaggio: $10

If customers want, they can add an unlimited number of extra options: either "ExtraSauce" for $1 or "ExtraToppings" for $2.
*/

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
	let total = 0;

	if (extras.length > 0) {
		let cextra = extras.pop();
		if (cextra == "ExtraSauce") total += 1;
		else total += 2;
		return total + pizzaPrice(pizza, ...extras);
	}

	if (pizza == "Margherita") total = 7;
	else if (pizza == "Caprese") total = 9;
	else total = 10;

	return total;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
	let total = 0;

	for (let order = 0; order < pizzaOrders.length; order++) {
		total += pizzaPrice(pizzaOrders[order].pizza, ...pizzaOrders[order].extras);
	}

	return total;
}
