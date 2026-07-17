const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const makeRow = (pad, letter, len) =>
  " ".repeat(pad) +
  (letter === "A" ? "A" : letter + " ".repeat(len - (pad * 2 + 2)) + letter) +
  " ".repeat(pad);

export const rows = (letter) => {
  const target = abc.indexOf(letter);
  if (target < 0) throw new Error("Invalid input");
  // if (letter === "A") return ["A"];

  let rowLength = target * 2 + 1;
  let diamond = [];

  const genRow = (i) => diamond.push(makeRow(target - i, abc[i], rowLength));

  for (let i = 0; i <= target; i++) genRow(i);
  for (let i = target - 1; i >= 0; i--) genRow(i);

  return diamond;
};
