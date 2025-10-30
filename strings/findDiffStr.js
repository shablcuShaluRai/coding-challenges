const findTheDifference = (s, t) => {
  s.split(``).forEach((char) => (t = t.replace(char, ``)));
  return t;
};

console.log("findTheDifference", findTheDifference("abrd", "darbg"));
