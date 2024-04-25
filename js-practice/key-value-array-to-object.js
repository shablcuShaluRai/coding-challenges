
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


function getData(arr1, arr2) {
  const obj = {}
  arr1.forEach((element,index) => {
    obj[element]  = arr2[index]
  });
  return obj
}

const arr = [11, 22, 32, 42]
const arr2 = ["ram", "shyam", "sita", "gita"]
const result = arr.reduce((acc, cum, index) => {
  // acc[cum] = arr2[index]
  // return acc
  return {
    ...acc, 
    [cum]: arr2[index]
  }
}, {})
console.log("re", result)

console.log("getData", getData(arr, arr2))

