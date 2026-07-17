/**
 * Check the state of a game of noughts and crosses
 * @param {String[]} board
 */
export const gamestate = (board) => {
	let cells = board.join("").split("").sort().join("").trim();
	if (cells[Math.floor(cells.length / 2)] === "O")
		throw new Error("Wrong turn order: O started");
	if (cells.indexOf("O") < 0 && cells.length > 1)
		throw new Error("Wrong turn order: X went twice");

	let xwins = 0,
		owins = 0,
		addWin = (p) => (p[0] === "X" ? xwins++ : owins++);

	// Row and column wins
	for (let x = 0; x < 3; x++) {
		let col = "";
		let row = "";
		for (let y = 0; y < 3; y++) {
			row += board[x][y];
			col += board[y][x];
		}

		if (/X{3}|O{3}/.test(row)) addWin(row);
		if (/X{3}|O{3}/.test(col)) addWin(col);
	}

	// Diagonal wins
	let mid = board[1][1];
	if (mid !== " ") {
		if (
			(board[0][0] === mid && board[2][2] === mid) ||
			(board[0][2] === mid && board[2][0] === mid)
		)
			addWin(mid);
	}

	if (xwins > 0 && owins > 0)
		throw new Error(
			"Impossible board: game should have ended after the game was won"
		);

	if (xwins + owins < 1) {
		if (cells.length === 9) return "draw";
		return "ongoing";
	}

	return "win";
};
