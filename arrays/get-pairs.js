// There is an array of numbers. For a given number n

// find the pairs of number in the array who sum to n.
// find the triplets in the array who sum to n.
// e.g. array = [4,5,6,3,4,5,1,2] for n = 10,
// pairs are (4,6), (5,5)
// triplets are (6,3,1),(4,4,2),(5,4,1)

let array = [4, 5, 6, 3, 4, 5, 1, 2],
  n = 10;

function getPairs(arr, n) {
  let firstNum = 0,
    index = 0,
    remainNum = 0;
  const result = [];
  while (arr[index]) {
    firstNum = arr[index];
    remainNum = n - firstNum;
    if (
      arr.includes(remainNum) &&
      !result.includes(firstNum) &&
      !result.includes(remainNum)
    ) {
      result.push(firstNum);
      result.push(remainNum);
    }
    index++;
  }
  return result;
}

document.write("pairs: ", getPairs(array, n));
