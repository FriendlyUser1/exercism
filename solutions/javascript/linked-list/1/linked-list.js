export class LinkedList {
	constructor() {
		this.list = [];
	}

	push(i) {
		this.list.push(i);
	}

	pop() {
		return this.list.pop();
	}

	shift() {
		return this.list.shift();
	}

	unshift(i) {
		this.list.unshift(i);
	}

	delete(i) {
		if (this.list.includes(i)) this.list.splice(this.list.indexOf(i), 1);
	}

	count() {
		return this.list.length;
	}
}
