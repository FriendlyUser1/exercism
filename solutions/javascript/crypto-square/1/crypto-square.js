export class Crypto {
  constructor(plaintext) {
    this.pt = plaintext;
  }

  get ciphertext() {
    let pt = this.pt.replace(/[\W_]/g, "").toLowerCase(),
      ct = [],
      c = 1,
      r = 1;

    if (pt.length < 2) return pt;

    // Find c and r
    if (Number.isInteger(Math.sqrt(pt.length))) c = r = Math.sqrt(pt.length);
    while (!(c * r >= pt.length && c >= r && c - r <= 1)) {
      c++;
      if (c * r >= pt.length && c >= r && c - r <= 1) break;
      r++;
    }

    // Encode by running along string
    for (let start = 0; start < c; start++) {
      let last = start,
        chunk = "";

      while (last < pt.length) {
        chunk += pt[last];
        last += c;
      }

      ct.push(chunk.padEnd(r));
    }

    return ct.join(" ");
  }
}
