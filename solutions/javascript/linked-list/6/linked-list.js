export class LinkedList {
	constructor() {
		this.tail = null;
		this.head = null;
	}

	// add node to end
	push(value, end = true) {
		let temp, p;

		temp = this.createNode();
		temp.value = value;

		if (!this.tail) {
			this.tail = temp;
			this.head = temp;
		} else {
			p = this.tail;
			if (end) {
				while (p.next) p = p.next;

				p.next = temp;
				p.next.prev = p;
				this.head = p.next;
			} else {
				p.prev = temp;
				p.prev.next = p;
				this.tail = p.prev;
			}
		}
	}

	// remove last node and return value
	pop() {
		let temp = Object.assign({}, this.head);
		if (!this.head.prev) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.prev;
			this.head.next = null;
		}
		return temp.value;
	}

	// remove first node and return value
	shift() {
		let temp = Object.assign({}, this.tail);
		if (!this.tail.next) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.next;
			this.tail.prev = null;
		}
		return temp.value;
	}

	// add node to start
	unshift(value) {
		this.push(value, false);
	}

	// remove first node with value
	delete(value) {
		let p = this.tail;
		if (p.value === value) return this.shift();
		while (p.next) {
			p = p.next;
			if (!p.next) return this.pop();
			if (p.value === value) {
				p.prev.next = p.next;
				p.next.prev = p.prev;
				p = null;
				return;
			}
		}
	}

	// return length of list
	count() {
		let i = 1,
			p = this.tail;

		if (!p) return 0;

		while (p.next) {
			p = p.next;
			i++;
		}

		return i;
	}

	createNode() {
		return { value: 0, next: null, prev: null };
	}
}
