export class Matrix {
	constructor(matrix) {
		this.matrix = matrix;
	}

	get rows() {
		if (this.matrix.length === 1) return [[1]];

		let rows = this.matrix.split("\n");

		for (let i = 0; i < rows.length; i++)
			rows[i] = rows[i].split(" ").map((n) => parseInt(n));

		return rows;
	}

	get columns() {
		if (this.matrix.length === 1) return [[1]];

		let rows = this.rows,
			columns = [];

		for (let j = 0; j < rows[0].length; j++) {
			let column = [];
			rows.forEach((row) => column.push(row[j]));
			columns.push(column);
		}

		return columns;
	}
}
