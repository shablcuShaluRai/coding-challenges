function alterNativeSol(a, b) {
  const start = a[0] === b[0] ? 0 : 1;
  const blength = b.length;
  let bIndex = 0;
  let newStr = "";
  console.log("start", start);
  for (let i = start; i < a.length; i = i + 2) {
    if (a.charAt(i) === b[bIndex] && bIndex !== blength) {
      console.log("newStr", newStr);
      newStr += a.charAt(i);
      bIndex = bIndex + 1;
    }
  }
  return newStr === b;
}

console.log("alterNativeSol 1", alterNativeSol("helloworld", "elwr"));
console.log("alterNativeSol 2", alterNativeSol("helloworld", "hlool"));
console.log("alterNativeSol 3", alterNativeSol("helloworld", "hloold"));
console.log("alterNativeSol 4", alterNativeSol("helloworld", "rd"));
console.log("alterNativeSol 5", alterNativeSol("helloworld", "rl"));
