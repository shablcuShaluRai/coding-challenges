function reorderedPowerOf2(N) {
  let res = N.toString().split("").sort().join("");
  console.log("res", res);
  for (let i = 0; i < 30; i++) {
    console.log("(1 << i)", 1 << i);
    if ((1 << i).toString().split("").sort().join("") === res) return true;
  }
  return false;
}

console.log("reorderedPowerOf2", reorderedPowerOf2(1240));
