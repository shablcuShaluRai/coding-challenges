//Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// uncomment below to check the code in the console
// function getTraingle(number) {
//   let i, j;
//   console.log("get trainle call", i);
//   for (i = 1; i <= number; i++) {
//     let output = "";
//     for (j = 1; j <= i; j++) {
//       output += "#";
//     }
//     console.log(output);
//   }
// }

// const number = prompt("enter to get the pattern");
// console.log(getTraingle(number));

function getTraingle(number) {
  let i, j;
  for (i = 1; i <= number; i++) {
    for (j = 1; j <= i; j++) {
      document.write("#");
    }
    document.write("<br/>");
  }
}

const number = prompt("enter to get the pattern");
getTraingle(number);
