const BOOK_PRICE = 800;

export const cost = (books) => {
	let genericCost = books.length * BOOK_PRICE,
		discounts = { 5: 0.25, 4: 0.2, 3: 0.1, 2: 0.05 },
		books_set = [];

	// books_set is the groups (1 to 5) because a set has unique values
	while (books.length > 0) {
		books_set.push(new Set(books).size);
		for (let b of new Set(books)) {
			books.splice(books.indexOf(b), 1);
		}
	}

	// two groups of four is cheaper than groups of five and three
	while (books_set.includes(3) && books_set.includes(5)) {
		books_set.splice(books_set.indexOf(3), 1);
		books_set.splice(books_set.indexOf(5), 1);
		books_set.push(4, 4);
	}

	let discount = books_set.reduce(
		(last, groupSize) =>
			last + (discounts[groupSize] || 0) * BOOK_PRICE * groupSize,
		0
	);

	return genericCost - discount;
};
