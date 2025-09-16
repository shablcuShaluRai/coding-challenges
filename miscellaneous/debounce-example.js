// document.getElementById("app").innerHTML = `
// <div id="app">
//   <input type="text">
//   <p>You entered: <span>An incorrect value!</span></p>
// </div>
// `;

var input = document.querySelector("input");
var output = document.querySelector("p span");

const debounceFunc = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const getData = (event) => {
  console.log("event...", event.target.value);
  output.textContent = event.target.value;
  output.style.color = "red";
};

input.addEventListener("keypress", debounceFunc(getData, 300));
