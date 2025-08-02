const mainScreen = document.querySelector("#main-screen");
const numberButtons = document.querySelectorAll("[data-number]");

// click event
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleInputNumber(button.textContent);
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
