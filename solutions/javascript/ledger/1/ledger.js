class LedgerEntry {
	/**
	 * @param {Date} date
	 * @param {String} description
	 * @param {Number} change
	 */
	constructor(date, description, change) {
		this.date = date;
		this.description = description;
		this.change = change;
	}
}

export const createEntry = (date, description, change) =>
	new LedgerEntry(new Date(date), description, change);

/**
 *
 * @param {String} currency
 * @param {String} locale
 * @param {LedgerEntry[]} entries
 * @returns
 */
export const formatEntries = (currency, locale, entries) => {
	if (!["USD", "EUR"].includes(currency))
		throw Error("Invalid currency, accepted: 'USD', 'EUR'");
	if (!["en-US", "nl-NL"].includes(locale))
		throw Error("Invalid locale, accepted: 'en-US', 'nl-NL'");

	let table = "";
	const headings =
		locale === "en-US"
			? ["Date", "Description", "Change"]
			: ["Datum", "Omschrijving", "Verandering"];

	// Add headings to table
	table +=
		headings[0].padEnd(10, " ") +
		" | " +
		headings[1].padEnd(25, " ") +
		" | " +
		headings[2].padEnd(13, " ") +
		"\n";

	// Sort entries
	entries.sort(
		(a, b) =>
			a.date - b.date ||
			a.change - b.change ||
			a.description.localeCompare(b.description)
	);

	entries.forEach((entry) => {
		// Add entry date to table
		table += `${entry.date.toLocaleDateString(locale, {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		})} | `;

		// Add entry description to table
		table += `${
			entry.description.length > 25
				? `${entry.description.substring(0, 22)}...`
				: entry.description.padEnd(25, " ")
		} | `;

		// Add entry change to table
		let changeOptions = {
			style: "currency",
			currency: currency,
			currencyDisplay: "narrowSymbol",
		};
		let change = entry.change / 100;

		if (locale === "en-US") {
			change = Math.abs(change).toLocaleString("en-US", changeOptions);

			if (entry.change < 0) change = `(${change})`;
			else change += " ";
		} else change = change.toLocaleString("nl-NL", changeOptions) + " ";

		table += change.padStart(13, " ");
		table += "\n";
	});

	return table.replace(/\n$/, "");
};
