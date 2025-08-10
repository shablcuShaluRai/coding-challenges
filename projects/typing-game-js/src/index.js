import "./styles.css";

const quotes = [
  "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
  "There is nothing more deceptive than an obvious fact.",
  "I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.",
  "I never make exceptions. An exception disproves the rule.",
  "What one man can invent another can discover.",
  "Nothing clears up a case so much as stating it to another person.",
  "Education never ends, Watson. It is a series of lessons, with the greatest for the last."
];

const inputValues = document.getElementById("typed-value");
const messageValue = document.getElementById("message");
const quoteValue = document.getElementById("quote");
const buttonClick = document.getElementById("start-btn");

let words = [];
let wordIndex = 0;
let startTime = Date.now();

buttonClick.addEventListener("click", () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  console.log("quoteIndex", quoteIndex);
  const quote = quotes[quoteIndex];
  console.log("quote", quote);
  words = quote.split(" ");
  wordIndex = 0;
  const spanWord = words.map((word) => `<span>${word}</span>`);
  console.log("spanWord", spanWord);
  quoteValue.innerHTML = spanWord.join(" ");
  console.log("quoteValue.childNodes[0]", quoteValue.childNodes[0]);
  quoteValue.childNodes[0].className = "highlight";
  messageValue.innerText = "";

  // Setup the textbox
  // Clear the textbox
  inputValues.value = "";
  // set focus
  inputValues.focus();
});

inputValues.addEventListener("input", () => {
  // Get the current word
  const currentWord = words[wordIndex];
  // get the current value
  const typedValue = inputValues.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    // end of sentence
    // Display success
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${
      elapsedTime / 1000
    } seconds.`;
    messageValue.innerText = message;
  } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
    // end of word
    // clear the typedValueElement for the new word
    inputValues.value = "";
    // move to the next word
    wordIndex++;
    // reset the class name for all elements in quote
    for (const wordElement of quoteValue.childNodes) {
      wordElement.className = "";
    }
    console.log("wordIndex", wordIndex);
    console.log(
      " quoteValue.childNodes[wordIndex]",
      quoteValue.childNodes[wordIndex]
    );
    // highlight the new word
    quoteValue.childNodes[wordIndex].className = "highlight";
  } else if (currentWord.startsWith(typedValue)) {
    // currently correct
    // highlight the next word
    inputValues.className = "";
  } else {
    // error state
    inputValues.className = "error";
  }
});
