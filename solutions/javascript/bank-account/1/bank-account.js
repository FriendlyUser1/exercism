export class BankAccount {
	constructor() {
		this.closed = true;
	}

	open() {
		if (this.closed === true) {
			this._balance = 0;
			this.closed = false;
		} else throw new ValueError();
	}

	close() {
		if (this.closed === false) this.closed = true;
		else throw new ValueError();
	}

	deposit(amount) {
		if (this.closed === false && amount > 0) this._balance += amount;
		else throw new ValueError();
	}

	withdraw(amount) {
		if (this.closed === false && amount > 0 && amount <= this._balance)
			this._balance -= amount;
		else throw new ValueError();
	}

	get balance() {
		if (this.closed === false) return this._balance;
		else throw new ValueError();
	}
}

class ValueError extends Error {
	constructor() {
		super("Bank account error");
	}
}
