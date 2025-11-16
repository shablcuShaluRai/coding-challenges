// Input:
// Array 1 =>  [1, 2, 3, 4]
// Array 2 =>  ["ram", "shyam", "sita", "gita"]

// Output:
// {
//   1: "ram",
//   2: "shyam",
//   3: "sita",
//   4: "gita"
// }

const arr1 = [1, 2, 3, 4];
const arr2 = ["ram", "shyam", "sita", "gita"];

function convertArryToObject(arr1, arr2) {
  const obj = {};
  if (arr1.length !== arr2.length) return "object can't be created";
  arr1.forEach((element, index) => {
    obj[element] = arr2[index];
  });
  return obj;
}
convertArryToObject(arr1, arr2);
// console.log("convertArryToObject", convertArryToObject(arr1, arr2));

// const result = Object.assign(
//   ...arr1.map((ele, index) => ({ [ele]: arr2[index] }))
// );

// console.log("result", result);

const arr = [
  ["John", 12],
  ["Jack", 13],
  ["Matt", 14],
  ["Maxx", 15]
];

// Output: {
//    "John": 12,
//    "Jack": 13,
//    "Matt": 14,
//    "Maxx": 15
//  }

// const obj = {};
// arr.forEach((ar) => (obj[ar[0]] = ar[1]));
// console.log("obj", obj);

function arr2obj(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}
console.log("arr2obj", arr2obj(arr));
