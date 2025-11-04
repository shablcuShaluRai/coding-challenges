// You are given an integer N. You need to convert all zeroes of N to 5.

// Example 1:

// Input:
// N = 1004
// Output: 1554
// Explanation: There are two zeroes in 1004
// on replacing all zeroes with "5", the new
// number will be "1554".
// Example 2:

// Input:
// N = 121
// Output: 121
// Explanation: Since there are no zeroes in
// "121", the number remains as "121".

// not completed the function
function convertFive(n) {
  const len = n.toString().length;
  const arr = n.toString().split("");
  let newStr = "";
  for (let i = 0; i < len; i++) {
    if (arr[i] === "0") {
      newStr += "5";
    } else {
      newStr += arr[i];
    }
  }
  return +newStr;
}

console.log("convertFive", convertFive(1004));
