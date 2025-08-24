let array = [4, 5, 6, 3, 4, 5, 1, 2],
  n = 10;

// function getTriplets(arr, n) {
//   let firstNum = 0,
//     secondNum = 0,
//     thirdNum = 0;
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     firstNum = arr[i];
//     for (let j = 0; j < arr.length; j++) {
//       secondNum = arr[j];
//       for (let k = 0; k < arr.length; k++) {
//         thirdNum = n - (firstNum + secondNum);
//         if (arr[k] === thirdNum) {
//           result.push([firstNum, secondNum, thirdNum]);
//         }
//       }
//     }
//   }
//   return result;
// }

// document.write("triplets:", getTriplets(array, n));

// you will get the triplets in sequence only
function getTriplets(arr, n) {
  let firstNum = 0,
    secondNum = 0,
    remainNum = 0,
    index = 0;
  const result = [];
  while (arr[index]) {
    firstNum = arr[index];
    let nextIndex = index + 1;
    secondNum = index < arr.length - 1 && arr[nextIndex];
    const sum = firstNum + secondNum;
    if (sum > n) {
      nextIndex = nextIndex + 1;
      secondNum = index < arr.length - 1 && arr[nextIndex];
    } else {
      secondNum = index < arr.length - 1 && arr[nextIndex];
    }
    remainNum = n - (firstNum + secondNum);
    console.log("num", firstNum, secondNum, remainNum);

    // console.log("remainNum", remainNum);
    if (arr.includes(remainNum)) {
      console.log("condtion true");
      result.push([firstNum, secondNum, remainNum]);
    }
    index++;
  }
  return result;
}

document.write("triplet: ", getTriplets(array, n));
