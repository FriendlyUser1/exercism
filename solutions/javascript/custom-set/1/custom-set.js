export class CustomSet {
	constructor(set) {
		this.set = new Set(set) ?? new Set();
	}

	empty() {
		return this.set.size === 0;
	}

	contains(n) {
		return this.set.has(n);
	}

	add(n) {
		return new CustomSet(this.set.add(n));
	}

	subset(s) {
		for (let i of this.set) if (!s.set.has(i)) return false;
		return true;
	}

	disjoint(s) {
		for (let i of this.set) if (s.set.has(i)) return false;
		return true;
	}

	eql(s) {
		return (
			this.set.size === s.set.size && [...this.set].every((x) => s.set.has(x))
		);
	}

	union(s) {
		for (let i of s.set) this.set.add(i);
		return new CustomSet(this.set);
	}

	intersection(s) {
		let inte = new Set();
		for (let i of s.set) if (this.set.has(i)) inte.add(i);
		return new CustomSet(inte);
	}

	difference(s) {
		for (let i of this.set) if (s.set.has(i)) this.set.delete(i);
		return new CustomSet(this.set);
	}
}
