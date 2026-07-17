export const encode = (ints) => {
  let encoded = [];

  for (let i = 0; i < ints.length; i++) {
    const int = ints[i];

    let bin = int.toString(2);
    let len = bin.length;

    if (len % 7 !== 0) bin = bin.padStart(len + (7 - (len % 7)), "0");
    let nbytes = bin.length / 7;

    for (let byte = 0; byte < nbytes; byte++) {
      encoded.push(
        parseInt(
          (byte === nbytes - 1 ? "0" : "1") +
            bin.substring(7 * byte, 7 * byte + 7),
          2
        )
      );
    }
  }

  return encoded;
};

export const decode = (seqs) => {
  let decoded = [];
  let sequence = [];
  let inSequence = false;

  for (let i = 0; i < seqs.length; i++) {
    let byte = seqs[i].toString(2).padStart(8, "0");

    // Single byte sequence
    if (seqs[i] < 128 && inSequence === false) {
      decoded.push(parseInt(byte, 2));
      continue;
    }

    sequence.push(byte.substring(1));

    if (byte[0] === "1") inSequence = true;
    else {
      // Last byte of sequence
      inSequence = false;
      decoded.push(parseInt(sequence.join(""), 2));
      sequence = [];
    }
  }

  if (inSequence) throw new Error("Incomplete sequence");
  return decoded;
};
