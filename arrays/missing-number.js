const n = 10;
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];

function getSumfromArr(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function getMissingNumber(arr, num) {
  // formula will give you total sum of tha all numbers
  const totalSum = (num * (num + 1)) / 2;
  const sumofArr = getSumfromArr(arr);
  return totalSum - sumofArr;
}

// if you don't know the formula to get the sum
// of total number then you can create an array till
//the num then get som of the all element of array till number.

// function getNumeberList(n) {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// function getMissingNumber(arr, num) {
//   const arrFromNum = getNumeberList(num);
//   const totalSum = getSumfromArr(arrFromNum);
//   const sum = getSumfromArr(arr);
//   return totalSum - sum;
// }

document.write(getMissingNumber(numbers, n));
