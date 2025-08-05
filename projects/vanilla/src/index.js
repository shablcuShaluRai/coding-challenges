// const obj = {
//   num: 5
// };

// function sum(a, b) {
//   return this.num + a + b;
// }

// // const getSum = sum.bind(obj);
// // console.log("", sum.call(obj, 2, 4));
// // console.log("", getSum(2, 3));

// const text = "aaabbbcccddddffff";
// //output:
// // {
// //  a : 3,
// //  b:3,
// //  c: 4
// // }

// function getCountOfText(text) {
//   const obj = {};
//   for (let i = 0; i < text.length; i++) {
//     if (obj[text[i]]) {
//       obj[text[i]] += 1;
//     } else {
//       obj[text[i]] = 1;
//     }
//   }
//   return obj;
// }
// console.log("getCountOfText", getCountOfText(text));

const arr = [2, 3, 4, 5, 6, 7];
// // output: 18

function maxiumSubArr(arr) {
  let subArr = [0, 0, 0],
    sumSubArr = 0;
  let maxSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < 3; j++) {
      subArr[j] = arr[j];
      sumSubArr += arr[j];
    }

    // subArr = arr.slice(i, i + 3);

    // console.log("subArr", subArr);
    maxSum = Math.max(maxSum);
  }
  return maxSum;
}

console.log("maxiumSubArr(arr)", maxiumSubArr(arr));
// curried((1)(2)(3)())
// curried(1,2)()
