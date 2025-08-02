let firstOperand = "";
let operator = null;

const mainScreen = document.querySelector("#main-screen");
const sencondaryScreen = document.querySelector("#secondary-screen");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");

// click event
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleInputNumber(button.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleInputOperator(button.textContent);
  });
});

// function
function handleInputNumber(number) {
  if (mainScreen.textContent === "0") {
    mainScreen.textContent = number;
  } else {
    mainScreen.textContent += number;
  }
}

function handleInputOperator(op) {
  firstOperand = mainScreen.textContent;
  operator = op;
  sencondaryScreen.textContent = `${firstOperand} ${operator}`;
  mainScreen.textContent = "0";
}
