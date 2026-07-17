/**
 * Counts nucleotides in a DNA sequence
 * @param {string} strand
 */
export function countNucleotides(strand) {
	let s = strand.split(""),
		a = 0,
		c = 0,
		g = 0,
		t = 0;

	s.forEach((n) => {
		try {
			eval(`${n.toLowerCase()}++`);
		} catch {
			throw new Error("Invalid nucleotide in strand");
		}
	});

	return `${a} ${c} ${g} ${t}`;
}
