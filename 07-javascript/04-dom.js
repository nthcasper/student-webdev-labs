// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const outputDiv = document.querySelector(".output");

copyButton.addEventListener("click", () => {
  outputDiv.innerText = userInput1.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
const userInput2 = document.getElementById("userInput2");
const inputEventExample = document.getElementById("inputEventExample");

const outputPara = document.createElement("p");
inputEventExample.appendChild(outputPara);

userInput2.addEventListener("input", () => {
  outputPara.innerText = userInput2.value;
});
