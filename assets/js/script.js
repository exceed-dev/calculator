const mainScreen = document.querySelector("#main-screen");

function handleInputNumber(number) {
  if (mainScreen.textContent === "0") {
    mainScreen.textContent = number;
  } else {
    mainScreen.textContent += number;
  }
}
