/// <reference path="./global.d.ts" />
// @ts-check

/**
 * @param {number} timer
 */
export function cookingStatus(timer) {
	return timer === 0
		? "Lasagna is done."
		: !timer
		? "You forgot to set the timer."
		: "Not done, please wait.";
}

/**
 * @param {string[]} layers
 * @param {number|undefined} prep
 */
export function preparationTime(layers, prep) {
	return layers.length * (prep ?? 2);
}

/**
 * @param {string[]} layers
 */
export function quantities(layers) {
	let quantityObj = { noodles: 0, sauce: 0 };
	layers.forEach((layer) => {
		if (["noodles", "sauce"].includes(layer)) {
			quantityObj[layer] += layer == "noodles" ? 50 : 0.2;
		}
	});
	return quantityObj;
}

/**
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
	myList.push(friendsList[friendsList.length - 1]);
}

/**
 * @param {object} recipe
 * @param {number} portions
 */
export function scaleRecipe(recipe, portions) {
	let newRecipe = { ...recipe };
	Object.keys(newRecipe).forEach((ingredient) => {
		newRecipe[ingredient] *= portions / 2;
	});
	return newRecipe;
}
