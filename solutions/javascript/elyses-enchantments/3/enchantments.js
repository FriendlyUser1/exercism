export const getItem = (cards, position) => {
	return cards[position];
}

export const setItem = (cards, position, replacementCard) => {
	cards[position] = replacementCard;
	return cards;
}

export const insertItemAtTop = (cards, newCard) => {
	cards.push(newCard);
	return cards;
}

export const removeItem = (cards, position) => {
	cards.splice(position, 1);
	return cards;
}

export const removeItemFromTop = (cards) => {
	cards.pop();
	return cards;
}

export const insertItemAtBottom = (cards, newCard) => {
	cards.unshift(newCard);
	return cards;
}

export const removeItemAtBottom = (cards) => {
	cards.shift();
	return cards;
}

export const checkSizeOfStack = (cards, stackSize) => {
	return cards.length === stackSize;
}
