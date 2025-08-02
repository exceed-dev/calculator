let firstOperand = "";
let secondOperand = "";
let operator = null;
let resetCalculation = false;

const mainScreen = document.querySelector("#main-screen");
const secondaryScreen = document.querySelector("#secondary-screen");
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("#equal");
const deleteButton = document.querySelector("#backspace");
const clearButton = document.querySelector("#clear");
const pointButton = document.querySelector("#point");

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

equalButton.addEventListener("click", calculate);

deleteButton.addEventListener("click", deleteNumber);

clearButton.addEventListener("click", clear);

pointButton.addEventListener("click", handleInputPoint);

// function
function handleInputNumber(number) {
  if (mainScreen.textContent === "0" || resetCalculation) {
    mainScreen.textContent = "";
    resetCalculation = false;
  }
  mainScreen.textContent += number;
}

function handleInputOperator(op) {
  if (operator !== null) calculate();
  firstOperand = mainScreen.textContent;
  operator = op;
  secondaryScreen.textContent = `${firstOperand} ${operator}`;
  resetCalculation = true;
}

function handleInputPoint() {
  if (resetCalculation) {
    mainScreen.textContent = "";
    resetCalculation = false;
  }
  if (mainScreen.textContent === "") {
    mainScreen.textContent = "0";
  }
  if (mainScreen.textContent.includes(".")) return;
  mainScreen.textContent += ".";
}

function deleteNumber() {
  mainScreen.textContent = mainScreen.textContent.slice(0, -1);
  if (mainScreen.textContent === "") {
    mainScreen.textContent = "0";
  }
}

function clear() {
  mainScreen.textContent = "0";
  secondaryScreen.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  operator = null;
}

function round(number) {
  return Math.round(number * 1000) / 1000;
}

function calculate() {
  if (resetCalculation) return;
  secondOperand = mainScreen.textContent;
  mainScreen.textContent = round(
    mathOperations(firstOperand, operator.trim(), secondOperand)
  );
  secondaryScreen.textContent = `${firstOperand} ${operator} ${secondOperand}`;
  operator = null;
  resetCalculation = true;
}

function mathOperations(num1, operator, num2) {
  let firstNumber = parseFloat(num1);
  let secondNumber = parseFloat(num2);
  let result;

  switch (operator) {
    case "+":
      result = add(firstNumber, secondNumber);
      break;
    case "-":
      result = subtract(firstNumber, secondNumber);
      break;
    case "*":
      result = multiply(firstNumber, secondNumber);
      break;
    case "/":
      if (secondNumber === 0) {
        result = `Error!`;
      } else {
        result = divide(firstNumber, secondNumber);
      }
      break;
    default:
      result = "Invalid";
  }

  return result.toString();
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
