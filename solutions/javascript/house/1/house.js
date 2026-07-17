export class House {
	static verse(stage) {
		if (stage < 2) return ["This is the house that Jack built."];
		let lines = [],
			lyrics = [
				["malt", "ate"],
				["rat", "killed"],
				["cat", "worried"],
				["dog", "tossed"],
				["cow with the crumpled horn", "milked"],
				["maiden all forlorn", "kissed"],
				["man all tattered and torn", "married"],
				["priest all shaven and shorn", "woke"],
				["rooster that crowed in the morn", "kept"],
				["farmer sowing his corn", "belonged to"],
				["horse and the hound and the horn"],
			];

		for (let i = stage - 2; i >= 0; i--) {
			if (i === stage - 2) lines.push(`This is the ${lyrics[i][0]}`);
			else {
				lines.push(`that ${lyrics[i][1]} the ${lyrics[i][0]}`);
			}
		}

		lines.push("that lay in the house that Jack built.");
		return lines;
	}

	static verses(start, end) {
		let lyrics = [];
		for (let i = start; i <= end; i++) {
			lyrics.push(...this.verse(i), "");
		}
		lyrics.pop();
		return lyrics;
	}
}
