let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

let list1 = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

function listToArray(list) {
  const arr = [];
  while (list.rest !== null) {
    if (list.value) {
      arr.push(list.value);
    }
    list = list.rest;
  }
  arr.push(list.value);
  return arr;
}

function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

// i want to return the list value in form of array but it's returning
// only last value.
function recursiveArr(list) {
  console.log("list>>>", list);
  let arr = [];
  console.log("arr", arr);
  if (list.rest !== null) return recursiveArr(list.rest);
  else return arr.concat(list.value);
}
// console.log("list", recursiveArr(list));
// console.log("list array", arrayToList([10, 12, 14]));

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

// const arrays = [[1, 2, 3], [4, [7, 0]], [6]];

// console.log(arrays.flat())

// Use the reduce method in combination with the concat method
// to “flat- ten” an array of arrays into a single array that
// has all the elements of the original arrays.

// function flatten(arr) {
//   return arr.reduce((acc, current) => acc.concat(...current), []);
// }

// console.log("array flat new", flatten(arrays));

// function loop(start, test, update, body) {
//   for (let value = start; test(value); value = update(value)) {
//     body(value);
//   }
// }

// loop(
//   3,
//   (n) => n > 0,
//   (n) => n - 1,
//   console.log
// );

// one way to write the method in the below

// function every(array, test) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (test(array[i])) {
//       count++;
//     }
//   }
//   return count === array.length;
// }

function every(array, testFn) {
  for (let key of array) {
    if (!testFn(key)) return false;
  }
  return true;
}

// function every(array, testFn) {
//   return !array.some((ele) => !testFn(ele));
// }

document.write(
  "every loop implementation",
  every([1, 3, 5], (n) => n < 10)
);
// → true
Document.write(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
