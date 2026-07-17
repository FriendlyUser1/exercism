export class Forth {
	constructor() {
		this.s = [];
		this.variables = {};
	}

	evaluate(s) {
		let a = s.split(" ").map((n) => n.toLowerCase());
		if (a.map(Number).every((n) => !isNaN(n))) this.s.push(...a.map(Number));
		else if (a.includes(":") && a.includes(";")) {
			if (a.every((n) => !isNaN(n) || [":", ";"].includes(n)))
				throw new Error("Invalid definition");
			let args = a.slice(2, -1);
			while (args.some((e) => this.variables[e])) {
				args.map((e, i) => {
					if (this.variables[e.toLowerCase()])
						args[i] = this.variables[e.toLowerCase()];
				});
			}
			this.variables[a[1].toLowerCase()] = args.join(" ");
		} else if (a.some((e) => this.variables[e])) {
			let ev = a.slice();
			ev.map((e, i) => {
				if (this.variables[e.toLowerCase()])
					ev[i] = this.variables[e.toLowerCase()];
			});
			this.evaluate(ev.join(" "));
		} else if (a.every((n) => !isNaN(n) || ["+", "-", "*", "/"].includes(n))) {
			if (a.includes("/") && a.includes("0"))
				throw new Error("Division by zero");

			if (a.length < 3) throw new Error("Stack empty");
			let op = a[0];
			for (let i = 0, j = -1; i < a.length - 1; i++) {
				j = i % 2 === 0 ? j + 3 : j - 1;
				op += a[j];
			}

			this.s.push(~~eval(op));
		} else if (
			a.every((n) => !isNaN(n) || ["dup", "drop", "swap", "over"].includes(n))
		) {
			this.s.push(...a.filter((n) => !isNaN(n)).map(Number));
			while (a.some((n) => ["dup", "drop", "swap", "over"].includes(n))) {
				if (a.includes("dup")) {
					if (a.length < 2) throw new Error("Stack empty");
					a.splice(a.indexOf("dup"), 1);
					this.s.push(parseInt(this.s.at(-1)));
				} else if (a.includes("drop")) {
					if (a.length < 2) throw new Error("Stack empty");
					a.splice(a.indexOf("drop"), 1);
					this.s.pop();
				} else if (a.includes("swap")) {
					if (a.length < 3) throw new Error("Stack empty");
					let p = a.indexOf("swap");
					a.splice(p, 1);
					let b = this.s.at(p - 2);
					this.s[p - 2] = this.s[p - 1];
					this.s[p - 1] = b;
				} else if (a.includes("over")) {
					if (a.length < 3) throw new Error("Stack empty");
					a.splice(a.indexOf("over"), 1);
					let b = this.s.at(-2);
					this.s.push(b);
				}
			}
		} else throw new Error("Unknown command");
	}

	get stack() {
		return this.s;
	}
}
