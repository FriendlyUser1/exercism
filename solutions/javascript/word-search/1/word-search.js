class WordSearch {
	constructor(grid) {
		this.grid = grid.map((l) => l.split(""));
	}

	/**
	 *
	 * @param {string[]} words Words to find in the grid
	 * @param {string[]} grid Wordsearch grid, split into characters
	 * @returns
	 */
	find(words, grid = this.grid) {
		let results = {};
		words.forEach((word) => {
			let start = [];
			let end = [];

			// Find starting letters
			let starts = [];
			grid.forEach((r, y) => {
				r.forEach((v, x) => {
					if (v === word[0]) starts.push([y, x]);
				});
			});

			// Check surrounding letters
			let next = word[1];
			starts.forEach((s) => {
				s[2] = [];
				for (let i = s[0] - 1; i < s[0] + 2; i++) {
					if (grid[i]) {
						let n = grid[i][s[1] - 1];
						if (n && n === next) s[2].push([i, s[1] - 1]);
						n = grid[i][s[1]];
						if (n && n === next) s[2].push([i, s[1]]);
						n = grid[i][s[1] + 1];
						if (n && n === next) s[2].push([i, s[1] + 1]);
					}
				}
			});
			starts = starts.filter((s) => s[2].length > 0);

			// Follow possible word
			starts.forEach((s) => {
				let origin = [s[0], s[1]];
				s[2].forEach((ns) => {
					let change = [ns[0] - origin[0], ns[1] - origin[1]];
					let place = ns.slice(),
						row = [],
						valid = true;

					for (let i = 2; i < word.length; i++) {
						place = place.map((g, i2) => g + change[i2]);
						row = grid[place[0]];
						if (!row || !row[place[1]] || row[place[1]] !== word[i])
							valid = false;
					}

					if (valid) {
						start = origin;
						end = place;
					}
				});
			});

			// Make results
			if (start.length !== 0 && end.length !== 0) {
				results[word] = {
					start: start.map((i) => i + 1),
					end: end.map((i) => i + 1),
				};
			} else results[word] = undefined;
		});

		return results;
	}
}

export default WordSearch;
