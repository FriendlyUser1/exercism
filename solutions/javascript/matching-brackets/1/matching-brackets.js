const BRACKET_MAP = {
  '(': ')',
  '[': ']',
  '{': '}'
};

const bracketCharacters = string => string.match(/[([{}\])]/g) || [];

export const isPaired = string => {
  const openBracketStack = [];
  return bracketCharacters(string).every(bracket =>
    !!BRACKET_MAP[bracket] ? openBracketStack.push(bracket) : BRACKET_MAP[openBracketStack.pop()] === bracket
  ) && openBracketStack.length===0;
};