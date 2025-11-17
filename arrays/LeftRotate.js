// rotate number by given times

function rotateNumber(arr, d) {
  while (d > 0) {
    arr.push(arr.shift());
    d--;
  }
  return arr;
}

// function rotateNumber(arr, d) {
// const deletedNumber = arr.slice(0, 2);
// arr.splice(0, d);
// arr.push(...deletedNumber);
// return arr;
// }

const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 2;
rotateNumber(arr, d);

// console.log("rotateNumber", rotateNumber(arr, d));

// Let the array be arr[] = [1, 2, 3, 4, 5, 6, 7], d =2 and n = 7
// A = [1, 2] and B = [3, 4, 5, 6, 7]

// Reverse A, we get ArB = [2, 1, 3, 4, 5, 6, 7]
// Reverse B, we get ArBr = [2, 1, 7, 6, 5, 4, 3]
// Reverse all, we get (ArBr)r = [3, 4, 5, 6, 7, 1, 2]

function rotateArrWithreverse(arr, d) {
  const a = arr.slice(0, d).reverse();
  const b = arr.slice(d).reverse();
  arr.splice(0, d, ...a);
  arr.splice(d, arr.length, ...b);
  return arr.reverse();
}
rotateArrWithreverse(arr, d);
// console.log("rotate", rotateArrWithreverse(arr, d));

// cyclically rotation

const arr1 = [1, 2, 3, 4, 5];
const a = arr1.shift();
arr1.unshift();

console.log("res", arr1);
