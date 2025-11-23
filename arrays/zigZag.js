// Given an array Arr (distinct elements) of size N. Rearrange the elements of array in zig-zag fashion. The converted array should be in form a < b > c < d > e < f. The relative order of elements is same in the output i.e you have to iterate on the original array only.

// Example 1:

// Input:
// N = 7
// Arr[] = {4, 3, 7, 8, 6, 2, 1}
// Output: 3 7 4 8 2 6 1
// Explanation: 3 < 7 > 4 < 8 > 2 < 6 > 1
// Example 2:

// Input:
// N = 4
// Arr[] = {1, 4, 3, 2}
// Output: 1 4 2 3
// Explanation: 1 < 4 > 2 < 3

function zigZag(arr, n) {
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    if ((flag && arr[i] > arr[i + 1]) || (!flag && arr[i] < arr[i + 1])) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      flag = !flag;
      continue;
    }

    if ((flag && arr[i] < arr[i + 1]) || (!flag && arr[i] > arr[i + 1])) {
      flag = !flag;
      continue;
    }
  }
  return arr;
}

console.log("zig zag", zigZag([4, 3, 7, 8, 6, 2, 1], 7));
