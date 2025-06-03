//https://stackblitz.com/edit/js-thaqe6?file=question_02.js,question_03.js,question_04.js,question_06.js,question_7.js,question_01.js

https://www.typescriptlang.org/play?#code/PTAEEYDpQBQGwKYEMDODQHcBOBLALungJ4AO6AZgPZahJZZJGiXmgCuaWKm+AFqORwI4AExQAuUADskAWwQAaWgHNFoEpRT4clKaAAUGXgizoNWvDr0BjJHoBG6XU-KSRCAG7DKZLEvdaylImSrJ2SKpYAJQAUCCgAEzQ8MhooNamSATSCBigOFIEWORI1oS8Wfnc9qgIIsx6AKqc+YUmJWWg9mx4oHhIANYI3LpwTILCYtJy6Hb1EbNS9RXcSCIi2rpIcAJCovkicWAAzMmItZi42cRkAtR9bCSImMamu1y9wgjyhTxwO45aHo6FhKHlyGwpNZLLo+hVeqY8GwsFJuFJKHheAVlED6mhrLp6jhuM0TH1SAgjqAACxnVLoDLIa4Uu40CFQmF6DAmdDc0AVLy0LDKNg-XoYPjk24sUCNADKZLmoERyL06Mx2JiMRu6FJWAAKiyAN4xUBm6byUDiFB4XBSZQKU3mhaSKSixx+J1m8ybKSSABE7i8cB8Jn9oAAPqBA8McEEw5Ho2EZJF-TEAL5anXsTjcAC8oAAgvRGAAePWGsgAPi1BSKHV1LRN5pzJkkHBMXoOoAA-JIbXblBmgA
// 1- interview que

// console.log('one');

// setTimeout(() => console.log('two'), 0);

// setTimeout(() => console.log('three'), 100);

// // function foo() {
// //   return Promise.resolve(1);
// // }
// async function foo() {
//   return  15345
// }
// foo().then(r => console.log(r))
// Promise.resolve().then(() => console.log('four'));

// console.log('five');

//2-interview que

var foo = 10 + '20';
// console.log(foo); // 1020


//3 - 
console.log("x before", x)
var x = 21;              
var girl = function () {
    console.log("func",x); //  undefined
    var x = 20;
    console.log("func after",x);
};
console.log('x after', x)
girl();


//4

let brain = true;
if (brain) {
  console.log("brain inside", brain)
    const head = {};
    head.brain = brain;
}

// console.log(head.brain); // reference error head is not defined

//5

class Person {};
class Programmer extends Person {};
const john = new Programmer('John', 'Smith');

console.log(john.__proto__) // ?
console.log(john.prototype) // ?


const ARRAY_OF_OBJECTS = [
  { id: 1, title: 'Title 1' },
  { id: 2, title: 'Title 2' },
  { id: 3, title: 'Title 3' },
];

const someFunction = () => {
  // You need to change title for 2d element of `ARRAY_OF_OBJECTS` and use it only in this place.
  const result = ARRAY_OF_OBJECTS.map((element, index) => {
    if (index === 1) {
      return {
        ...element,
        title: 'Shalu',
      };
    }
    return element;
  });
  console.log('result', result);
};

const anotherFunction = () => {
  // here we use original `ARRAY_OF_OBJECTS`
  console.log({ ARRAY_OF_OBJECTS });
};

someFunction();
anotherFunction();
