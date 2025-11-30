const arr = [];

// unshift

arr.unshift(10);
arr.unshift(20);
arr.unshift(30);

// shift

const deletedElement = arr.shift();

// push

arr.push(90);
arr.push(80);

/// remove element from the last

const removedElement = arr.pop();

console.log("removedElement", removedElement);
console.log("deletedElement", deletedElement);

console.log("arr", arr);

console.log("length", arr.length);

console.log("access", arr[2]);

console.log("arr join", arr.join(" "));
console.log("arr at", arr.at(2));
const fruits = ["apple", "banana", "cherry"];

const newArr = arr.concat(fruits);

console.log("new Arr", newArr, arr);

fruits.copyWithin(2, 0);

const copyArr = fruits.copyWithin(1, 2);

console.log("fruits", copyArr, fruits);
