const CS: any = {
	C: "G",
	G: "C",
	A: "U",
	T: "A",
};

export function toRna(dna: string): string {
	let rna = "";
	dna.split("").forEach((n) => {
		if (!CS[n]) throw new Error("Invalid input DNA.");
		rna += CS[n];
	});
	return rna;
}
