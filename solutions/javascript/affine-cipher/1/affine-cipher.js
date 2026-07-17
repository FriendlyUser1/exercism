const abc = "abcdefghijklmnopqrstuvwxyz";

/**
 * Encode to affine cipher
 * @param {string} pt
 * @param {{a: number, b: number}} key
 * @returns {string}
 */
export const encode = (pt, key) => {
  let { a, b } = key;
  let space = 4;

  if (a % 2 === 0 || a % 13 === 0) throw new Error("a and m must be coprime.");

  return pt
    .replace(/\W/g, "")
    .toLowerCase()
    .split("")
    .map((e, i) => {
      let ct = isNaN(e) ? abc[(a * abc.indexOf(e) + b) % 26] : e;
      if (i === space) (ct += " "), (space += 5);
      return ct;
    })
    .join("")
    .trim();
};

const pos = (a) => ((a % 26) + 26) % 26;

const mmi = (a, b) => {
  if (a === 0) return [b, 0, 1];

  let q = Math.floor(b / a),
    r = b % a;
  let g, x, y;
  [g, x, y] = mmi(r, a);
  return [g, y - q * x, x];
};

/**
 * Decode from affine cipher
 * @param {string} ct
 * @param {{a: number, b: number}} key
 * @returns {string}
 */
export const decode = (ct, key) => {
  let { a, b } = key;

  if (a % 2 === 0 || a % 13 === 0) throw new Error("a and m must be coprime.");

  return ct
    .replace(/\W/g, "")
    .toLowerCase()
    .split("")
    .map((e) =>
      !isNaN(e) ? e : abc[pos(mmi(a, 26)[1] * (abc.indexOf(e) - b))]
    )
    .join("");
};
