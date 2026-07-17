export class Clock {
	constructor(hours, minutes) {
		this.hours = hours;
		this.minutes = minutes || 0;
	}

	toString() {
		let hrs = this.hours,
			mins = this.minutes;

		if (mins >= 60) {
			hrs = hrs + Math.floor(mins / 60);
			mins = mins - (hrs - this.hours) * 60;
		}

		while (mins < 0) {
			mins = 60 - Math.abs(mins);
			hrs -= 1;
		}

		while (hrs < 0) {
			hrs = 24 - Math.abs(hrs);
		}

		this.hours = hrs;
		this.minutes = mins;

		return `${(this.hours >= 24 ? this.hours % 12 : this.hours)
			.toString()
			.padStart(2, "0")}:${this.minutes.toString().padStart(2, "0")}`;
	}

	plus(minutes) {
		this.minutes += minutes;
		return this.toString();
	}

	minus(minutes) {
		this.minutes -= minutes;
		return this.toString();
	}

	equals(clock) {
		return this.toString() === clock.toString();
	}
}
