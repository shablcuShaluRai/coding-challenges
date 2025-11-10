// In a party of N people, each person is denoted by an integer.
// Couples are represented by the same number.
// Find out the only single person in the party of couples.

// Input: N = 11
// arr = {1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6}
// Output: 4

function findSingle(n, arr) {
  //code here
  const nonDuplicateArr = [];
  for (let i = 0; i < n; i++) {
    let elementIdx = nonDuplicateArr.indexOf(arr[i]);
    if (elementIdx > -1) {
      nonDuplicateArr.splice(elementIdx, 1);
    } else {
      nonDuplicateArr.push(arr[i]);
    }
    // if (!nonDuplicateArr.includes(arr[i])) {
    //   nonDuplicateArr.push(arr[i]);
    // } else if (elementIdx > -1) {
    //   nonDuplicateArr.splice(elementIdx, 1);
    // }
  }
  return nonDuplicateArr[0];
}

const n = 11;
const arr = [1, 2, 3, 5, 3, 2, 1, 4, 5, 6, 6];

console.log("Party of Couple geeks for geeks solution", findSingle(n, arr));
