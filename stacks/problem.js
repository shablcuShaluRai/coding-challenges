import Stack from "./index";

// convert number into base
function mulBase(num, base) {
  const stack = new Stack();
  do {
    stack.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);
  let converted = "";
  while (stack.length() > 0) {
    converted += stack.pop();
  }
  return converted;
}

console.log("mulBase", mulBase(5, 2));

// is string palindrom

function isPalindrom(str) {
  const stack = new Stack();
  let reverseStr = "";
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (stack.length() > 0) {
    reverseStr += stack.pop();
  }
  if (reverseStr === str) return true;
  return false;
}

console.log("isPalindrom", isPalindrom("NAN"));
