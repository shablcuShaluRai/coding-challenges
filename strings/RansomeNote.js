// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function getObj(str) {
  const strObj = {};
  for (let key of str) {
    if (!strObj[key]) {
      strObj[key] = 1;
    } else {
      strObj[key] = strObj[key] + 1;
    }
  }
  return strObj;
}

var canConstruct = function (ransomNote, magazine) {
  const ransomeObj = getObj(ransomNote);
  const magazineObj = getObj(magazine);
  for (let key of ransomNote) {
    if (ransomeObj[key] <= magazineObj[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

// const a = "bg";
// const b = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";

const a = "fihjjjjei";
const b = "hjibagacbhadfaefdjaeaebgi";
console.log("ransome obj", canConstruct(a, b));
