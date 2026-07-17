export class Song {
	constructor() {
		this.base = "I know an old lady who swallowed a ";
		this.animals = [
			"",
			"fly.\n",
			"spider.\nIt wriggled and jiggled and tickled inside her.\n",
			"bird.\nHow absurd to swallow a bird!\n",
			"cat.\nImagine that, to swallow a cat!\n",
			"dog.\nWhat a hog, to swallow a dog!\n",
			"goat.\nJust opened her throat and swallowed a goat!\n",
			"cow.\nI don't know how she swallowed a cow!\n",
			"horse.\nShe's dead, of course!\n",
		];
		this.swallowed = [
			"",
			"",
			"She swallowed the spider to catch the fly.\n",
			"She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n",
			"She swallowed the cat to catch the bird.\n",
			"She swallowed the dog to catch the cat.\n",
			"She swallowed the goat to catch the dog.\n",
			"She swallowed the cow to catch the goat.\n",
		];
	}

	verse(v) {
		if (v === 8) return this.base + this.animals[8];
		let e = this.base + this.animals[v];

		for (let i = v; i > 1; i--) e += this.swallowed[i];

		return (e +=
			"I don't know why she swallowed the fly. Perhaps she'll die.\n");
	}

	verses(start, end) {
		let e = "";
		for (let i = start; i <= end; i++) e += this.verse(i) + "\n";
		return e;
	}
}
