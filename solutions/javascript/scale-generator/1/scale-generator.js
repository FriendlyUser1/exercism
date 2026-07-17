export class Scale {
	constructor(tonic) {
		this.tonic = tonic;
		this.scale = [
			"G",
			"C",
			"D",
			"A",
			"E",
			"B",
			"F#",
			"e",
			"a",
			"b",
			"f#",
			"c#",
			"g#",
			"d#",
		].includes(tonic)
			? ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
			: ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];
	}

	chromatic() {
		let s = this.scale,
			ts = this.tonic.split(""),
			t = s.indexOf(ts[0].toUpperCase() + (ts[1] ?? ""));
		return [...s.slice(t), ...s.slice(0, t)];
	}

	interval(intervals) {
		let newscale = [],
			is = intervals.split(""),
			scale = this.chromatic(),
			count = 0;
		for (let i = 0; i < is.length; i++) {
			newscale.push(scale[count]);
			count += is[i] === "m" ? 1 : is[i] === "M" ? 2 : 3;
		}
		return newscale;
	}
}
