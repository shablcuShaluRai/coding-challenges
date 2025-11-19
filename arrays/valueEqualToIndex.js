// Given an array Arr of N positive integers.
//  Your task is to find the elements whose value is equal
//   to that of its index value ( Consider 1-based indexing ).
function valueEqualToIndex(arr, n) {
  //code here
  const indices = [];
  if (arr.length > 0) {
    for (let i = 0; i < n; i++) {
      if (arr[i] === i + 1) indices.push(i + 1);
    }
    return indices;
  }
}

const arr = [
  1,
  335,
  501,
  170,
  725,
  479,
  359,
  963,
  465,
  706,
  146,
  12,
  828,
  962,
  492,
  996,
  943,
  828,
  437,
  392,
  605,
  903,
  154,
  293,
  383,
  422,
  717,
  719,
  896,
  448,
  727,
  772,
  539,
  870,
  913,
  668,
  300,
  36,
  895,
  704,
  812,
  323
];
console.log("valueEqualToIndex geeksforgeeks", valueEqualToIndex(arr, 42));
