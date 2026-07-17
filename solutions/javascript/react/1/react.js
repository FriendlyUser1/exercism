import EventEmitter from "events";

export class InputCell extends EventEmitter {
	constructor(value) {
		super();
		this.value = value;
	}

	setValue(value) {
		this.value = value;
		this.emit("update", this);
		this.emit("callback", this);
	}
}

export class ComputeCell extends EventEmitter {
	constructor(inputCells, fn) {
		super();

		this.value = fn(inputCells);
		this.originalvalue = this.value;

		this.update = () => {
			this.value = fn(inputCells);
			this.emit("update", this);
		};

		inputCells.forEach((cell) => {
			cell.on("update", this.update);
			cell.on("callback", () => this.callback());
		});
	}

	callback() {
		if (this.value !== this.originalvalue) {
			this.originalvalue = this.value;
			this.emit("callback", this);
		}
	}

	addCallback(cb) {
		this.on("callback", cb.update);
	}

	removeCallback(cb) {
		this.removeListener("callback", cb.update);
	}
}

export class CallbackCell {
	constructor(fn) {
		this.values = [];

		this.update = (cell) => {
			this.values.push(fn(cell));
		};
	}
}
