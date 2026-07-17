// @ts-check

export const getCardPosition = (stack, card) => {
	return stack.indexOf(card);
}
export const doesStackIncludeCard = (stack, card) => {
	return stack.includes(card);
}
export const isEachCardEven = (stack) => {
	return stack.every((card) => card % 2 === 0);
}
export const doesStackIncludeOddCard = (stack) => {
	return stack.some((card) => card % 2 === 1);
}
export const getFirstOddCard = (stack) => {
	return stack.find((card) => card % 2 === 1);
}
export const getFirstEvenCardPosition = (stack) => {
	return stack.findIndex((card) => card % 2 === 0);
}
