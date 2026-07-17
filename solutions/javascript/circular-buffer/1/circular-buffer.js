class CircularBuffer {
	constructor(length) {
		this.readIndex = 0;
		this.writeIndex = 0;
		this.length = length;
		this.buffer = new Array(length).fill(undefined);
	}

	get #full() {
		return this.buffer.every((c) => c !== undefined);
	}

	get #empty() {
		return this.buffer.every((c) => c === undefined);
	}

	#write(data) {
		this.buffer[this.writeIndex] = data;
		this.writeIndex = (this.writeIndex + 1) % this.length;

		return data;
	}

	/**
	 * Write to the oldest blank cell
	 * @param {any} data
	 * @returns data
	 */
	write(data) {
		if (this.#full) throw new BufferFullError();
		return this.#write(data);
	}

	/**
	 * Return the oldest surviving data, removing it from the buffer.
	 * @returns data
	 */
	read() {
		if (this.#empty) throw new BufferEmptyError();

		let data = this.buffer[this.readIndex];
		this.buffer[this.readIndex] = undefined;
		this.readIndex = (this.readIndex + 1) % this.length;

		return data;
	}

	/**
	 * Overwrites the oldest cell with input
	 * @param {any} data
	 * @returns data
	 */
	forceWrite(data) {
		// Since this cell will now be the newest, we need to increase readIndex.
		if (this.#full) this.readIndex = (this.readIndex + 1) % this.length;

		this.#write(data);
		return data;
	}

	clear() {
		this.buffer = new Array(this.length).fill(undefined);
	}
}

export default CircularBuffer;

export class BufferFullError extends Error {
	constructor(message) {
		super(message);
		this.message = "Buffer is full. Use forceWrite to ignore this error.";
		this.name = "BufferFullError";
	}
}

export class BufferEmptyError extends Error {
	constructor(message) {
		super(message);
		this.message = "Buffer is empty";
		this.name = "BufferEmptyError";
	}
}
