const arr = [1, 8, 7, 6, 1];
const sum = 9;

const twoSum = (arr, num) => {
  let obj = {};
  let res = [];
  arr.map((item) => {
    let com = num - item;
    if (obj[com]) {
      res.push(obj[com], item);
    } else {
      obj[item] = item;
    }
    return obj;
  });
  return res;
};

console.log("getSumArr", twoSum(arr, sum));
