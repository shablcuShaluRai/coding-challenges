// Given an array arr[] containing positive elements.
//  A and B are two numbers defining a range.
// The task is to check if the array contains all elements in the given range.

// Example 1:

// Input: N = 7, A = 2, B = 5
// arr[] =  {1, 4, 5, 2, 7, 8, 3}
// Output: Yes
// Explanation: It has elements between
// range 2-5 i.e 2,3,4,5
// Example 2:

// Input: N = 7, A = 2, B = 6
// arr[] = {1, 4, 5, 2, 7, 8, 3}
// Output: No
// Explanation: Array does not contain 6.

function checkElements(arr, A, B) {
  //code here
  for (let i = A; i <= B; i++) {
    if (arr.indexOf(i) === -1) {
      return false;
    }
  }
  return true;
}

console.log("checkElements", checkElements([1, 3, 2, 4, 6, 5, 7], 2, 5));
