// const makeTea = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Tea is ready!");
//   }, 3000); // Simulating the time it takes to make tea (3 seconds)
// });

// console.log("Start making tea..."); //1

// makeTea.then((message) => {
//   console.log(message);
// });

// console.log("Continuing with other tasks...");


async function makeTea() {
  console.log("Start making tea...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
 // Simulating the time it takes to make tea (3 seconds)
  console.log("Tea is ready!");
}

async function main() {
  await makeTea();
  console.log("Continuing with other tasks...");
}

main();
