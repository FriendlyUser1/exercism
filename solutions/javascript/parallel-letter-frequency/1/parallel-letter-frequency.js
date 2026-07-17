// Concurrent solution

export const parallelLetterFrequency = async (texts) => {
  let letters = {};

  texts
    .map((str) =>
      str
        .toLowerCase()
        .replace(/[^\p{L}]/gu, "")
        .split("")
    )
    .forEach((strArr) =>
      strArr.forEach((str) => {
        letters[str] = letters[str] ? letters[str] + 1 : 1;
      })
    );
  return Promise.resolve(letters);
};
