/**
 * Add numbers to a minesweeper board
 * @param {Array} input
 * @returns
 */
export const annotate = (input) => {
	// Create 2D array
	let board = input.slice().map((row) => row.split(""));

	// Calculate each cell in board
	for (let y = 0; y < board.length; y++) {
		for (let x = 0; x < board[y].length; x++) {
			if (board[y][x] == "*") continue;
			let mines = 0,
				// Define possible adjacents
				n = y > 0,
				e = x < board[y].length - 1,
				s = y < board.length - 1,
				w = x > 0;

			if (n && w && board[y - 1][x - 1] == "*") mines++;
			if (n && board[y - 1][x] == "*") mines++;
			if (n && e && board[y - 1][x + 1] == "*") mines++;
			if (e && board[y][x + 1] == "*") mines++;
			if (s && e && board[y + 1][x + 1] == "*") mines++;
			if (s && board[y + 1][x] == "*") mines++;
			if (s && w && board[y + 1][x - 1] == "*") mines++;
			if (w && board[y][x - 1] == "*") mines++;

			if (mines > 0) board[y][x] = mines.toString();
		}
	}

	// Join and return board
	return board.map((row) => row.join(""));
};
