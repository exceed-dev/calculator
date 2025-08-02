let firstOperand = "";
let secondOperand = "";
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

function calculate() {
  secondOperand = mainScreen.textContent;
  mainScreen.textContent = mathOperations(
    firstOperand,
    operator,
    secondOperand
  );
  sencondaryScreen.textContent = `${firstOperand} ${operator} ${secondOperand}`;
  operator = null;
}

function mathOperations(num1, operator, num2) {
  let firstNumber = parseFloat(num1);
  let secondNumber = parseFloat(num2);

  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      if (secondNumber === 0) {
        return `Cannot be divided by zero!`;
      } else {
        return divide(firstNumber, secondNumber);
      }
    default:
      return null;
  }
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
