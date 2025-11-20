// Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.

// Example 1:

// Input:
// N = 7, X = 2
// Arr[] = {1, 1, 2, 2, 2, 2, 3}
// Output: 4
// Explanation: 2 occurs 4 times in the
// given array.
// Example 2:

// Input:
// N = 7, X = 4
// Arr[] = {1, 1, 2, 2, 2, 2, 3}
// Output: 0
// Explanation: 4 is not present in the
// given array.

function count(arr, n, x) {
  //code here
  return arr.reduce((acc, cum) => {
    if (cum === x) acc++;
    return acc;
  }, 0);
}

console.log("count", count([1, 1, 2, 2, 2, 2, 3], 7, 2));

module.exports = count;
