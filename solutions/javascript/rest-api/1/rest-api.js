export class RestAPI {
	constructor(options) {
		this.users = options.users ?? [];
	}

	get(url) {
		let params = url.slice(6);
		if (params === "") return { users: this.users };

		return {
			users: [this.getUser(new URLSearchParams(params).get("users"))],
		};
	}

	post(url, pl) {
		if (url === "/add" && this.getUser(pl.user).length === 0) {
			let newUser = {
				name: pl.user,
				owes: {},
				owed_by: {},
				balance: pl.balance ?? 0,
			};
			this.users.push(newUser);
			return newUser;
		} else if (url === "/iou") {
			let lender = this.getUser(pl.lender),
				borrower = this.getUser(pl.borrower),
				a = pl.amount,
				inv = [lender, borrower];

			lender.balance += a;
			borrower.balance -= a;

			[
				[lender.owes[borrower.name], lender.owed_by[borrower.name]],
				[borrower.owed_by[lender.name], borrower.owes[lender.name]],
			].forEach((o, i) => {
				if (o[0]) {
					let amount = a > o[0] ? a - (a - o[0]) : a;
					o[0] -= amount;
					if (o[0] === 0) delete o[0];
					if (a - amount > 0) o[1] = (o[1] ?? 0) + (a - amount);
				} else o[1] = (o[1] ?? 0) + a;

				inv[i].owes[inv[1 - i].name] = o[i + 0];
				inv[i].owed_by[inv[1 - i].name] = o[1 - i];
			});

			return {
				users: inv.sort((a, b) => a.name.localeCompare(b.name)),
			};
		}
	}

	getUser(name) {
		if (this.users.length === 0) return [];

		return this.users.filter((user) => {
			return user.name === name;
		})[0];
	}
}
