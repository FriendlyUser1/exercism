/**
 * Converts a markdown formatted string to html
 * @param {String} markdown the markdown string
 */
export function parse(markdown) {
	let inList = false;
	let lines = markdown.split("\n");
	return lines
		.map((line, lineIndex) => {
			// If list item
			if (line.startsWith("*")) {
				let content = parseLine(line.substring(2), "li");

				// If starting a list
				if (!inList) {
					inList = true;
					return "<ul>" + content;
				}

				if (lines.length === lineIndex + 1) return content + "</ul>";

				return content;
			}

			let content = parseLine(line);

			// If just finished a list
			if (inList) {
				inList = false;
				return "</ul>" + content;
			}

			return content;
		})
		.join("");
}

/**
 * Converts a line of markdown to html
 * @param {String} mdLine
 */
function parseLine(mdLine, tag = "p") {
	// Heading
	if (mdLine.startsWith("#")) {
		let hashes = mdLine.match(/(#+)/)[0].length;
		if (hashes <= 6) return wrap(mdLine.substring(hashes + 1), "h" + hashes);
	}

	// Bold / Italics
	if (mdLine.includes("_")) {
		["__", "_"].forEach((delim, i) => {
			let toChange = RegExp(`${delim}(.+)${delim}`);
			mdLine = mdLine.replace(toChange, wrap("$1", ["strong", "em"][i]));
		});
	}

	return wrap(mdLine, tag);
}

function wrap(str, tag) {
	return `<${tag}>${str}</${tag}>`;
}
