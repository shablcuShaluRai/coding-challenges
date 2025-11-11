// Given a Integer array A[] of n elements.
//  Your task is to complete the function PalinArray.
//  Which will return 1 if all the elements of the Array
//  are palindrome otherwise it will return 0.

const arr = [111, 222, 333, 444, 555];

// check for the individual number is palindrom or not
function isNumberPalin(num) {
  const reverseNum = num.toString().split("").reverse().join("");
  return num.toString() === reverseNum;
}

function palinArray(arr) {
  //code here
  for (let i = 0; i < arr.length; i++) {
    if (!isNumberPalin(arr[i])) {
      return 0;
    } else {
      return 1;
    }
  }
}

console.log("palindrom array", palinArray(arr));
