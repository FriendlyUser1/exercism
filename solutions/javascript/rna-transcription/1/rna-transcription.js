const RNA_MAP = {
	G: "C",
	C: "G",
	T: "A",
	A: "U",
};

export const toRna = (dna) => {
	let rna = "";
	dna.split("").forEach((n) => {
		rna += RNA_MAP[n];
	});
	return rna;
};
