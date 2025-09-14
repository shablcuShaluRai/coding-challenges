
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counterValue = document.getElementById("count-value");

let counter = 0;

function updateCounter() {
  counterValue.innerHTML = counter;
}

function increaseValue() {
  counter += 1;
  updateCounter();
}

function decreaseValue() {
  if (counter > 0) {
    counter -= 1;
    updateCounter();
  }
}

function resetValue() {
  counter = 0;
  updateCounter();
}

increaseBtn.addEventListener("click", increaseValue);
decreaseBtn.addEventListener("click", decreaseValue);
reset.addEventListener("click", resetValue);
