// Given two strings s and t, return true if t is an anagram of s,
//  and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// function isAnagram(s, t) {
//   const sortS = s.split("").sort().join("");
//   const sortT = t.split("").sort().join("");
//   return sortS === sortT;
// }

function getObj(st) {
  const obj = {};
  for (let i = 0; i < st.length; i++) {
    if (obj[st[i]]) {
      obj[st[i]] = obj[st[i]] + 1;
    } else {
      obj[st[i]] = 1;
    }
  }
  return obj;
}

function isAnagram(s, t) {
  const objs = getObj(s);
  const objt = getObj(t);
  for (let key in objs) {
    if (objs[key] === objt[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log("isAnagram", isAnagram("anagram", "nagaram"));
console.log("isAnagram", isAnagram("rat", "car"));
