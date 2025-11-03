/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
  a: {
    b: {
      c: 12,
      j: false
    },
    k: null
  }
};

const findPath = (object, path) => {
  const pathArr = path.split(".");
  // alternative solution
  // let result = object;
  // for (let i = 0; i < pathArr.length; i++) {
  //   if (result && result[pathArr[i]]) {
  //     result = result[pathArr[i]];
  //   } else {
  //     result = undefined;
  //   }
  // }
  // return result;
  return pathArr.reduce((acc, cum) => {
    if (acc && acc[cum] !== undefined) {
      acc = acc[cum];
    } else {
      acc = undefined;
    }
    return acc;
  }, object);
};

console.log("1", findPath(obj, "a.b.c")); // 12
console.log("2", findPath(obj, "a.b")); // {c: 12, j: false}
console.log("3", findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null
