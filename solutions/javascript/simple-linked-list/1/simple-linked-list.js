export class Element {
	constructor(value) {
		this._value = value;
		this._next = null;
	}

	get value() {
		return this._value;
	}

	get next() {
		return this._next;
	}
}

export class List {
	constructor(list) {
		this._length = list?.length ?? 0;
		this._head = null;

		if (list) {
			this.list = list;
			let re = list.slice().reverse(),
				c;
			re.forEach((e, i) => {
				if (i === 0) {
					this._head = new Element(e);
					c = this._head;
				} else {
					c._next = new Element(e);
					c = c._next;
				}
			});
		}
	}

	add(nextValue) {
		this._length++;

		if (!this._head) this._head = nextValue;
		else {
			let temp = this._head;
			this._head = nextValue;
			this._head._next = temp;
		}
	}

	get length() {
		return this._length;
	}

	get head() {
		return this._head;
	}

	toArray() {
		return this.list.reverse();
	}

	reverse() {
		let re = this.list.reverse();
		return new List(re);
	}
}
