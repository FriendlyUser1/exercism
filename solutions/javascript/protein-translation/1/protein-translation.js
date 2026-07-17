export const translate = (rna = "") => {
	let proteins = [],
		codons = rna.match(/.{1,3}/g) ?? [];

	for (let i = 0; i < codons.length; i++) {
		let c = codons[i],
			check = proteins.slice(0);

		if (rna === "AUGU") console.log(codons);
		if (["UAA", "UAG", "UGA"].includes(c)) break;
		if ("AUG" === c) proteins.push("Methionine");
		if (["UUU", "UUC"].includes(c)) proteins.push("Phenylalanine");
		if (["UUA", "UUG"].includes(c)) proteins.push("Leucine");
		if (["UCU", "UCC", "UCA", "UCG"].includes(c)) proteins.push("Serine");
		if (["UAU", "UAC"].includes(c)) proteins.push("Tyrosine");
		if (["UGU", "UGC"].includes(c)) proteins.push("Cysteine");
		if ("UGG" === c) proteins.push("Tryptophan");

		if (JSON.stringify(check) === JSON.stringify(proteins) || c.length !== 3)
			throw new Error("Invalid codon");
	}

	return proteins;
};
