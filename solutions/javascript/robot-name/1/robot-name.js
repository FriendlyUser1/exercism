var names = ["INIT"];

export class Robot {
	constructor() {
		this.privateName = this.makename();
	}

	get name() {
		return this.privateName;
	}

	makename() {
		const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let name = "INIT";

		while (names.includes(name)) {
			const chars = [
				alphabet[Math.floor(Math.random() * alphabet.length)],
				alphabet[Math.floor(Math.random() * alphabet.length)],
			].join("");

			const numbers = [
				Math.floor(Math.random() * 10).toString(),
				Math.floor(Math.random() * 10).toString(),
				Math.floor(Math.random() * 10).toString(),
			].join("");

			name = chars + numbers;
		}

		names.push(name);
		return name;
	}

	reset() {
		this.privateName = this.makename();
	}
}

Robot.releaseNames = () => {
	names = ["INIT"];
};
