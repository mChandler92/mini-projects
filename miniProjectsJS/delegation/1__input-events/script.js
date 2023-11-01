const mySelect = document.getElementById("my-select");
const changeOutput = document.getElementById("change-output");

const myInput = document.getElementById("my-input");
const focusBlurOutput = document.getElementById("focus-blur-output");


mySelect.addEventListener("change", function (event) {
  changeOutput.textContent = `You selected: ${event.target.value}!`
});

myInput.addEventListener("focus", function (event) {
  changeOutput.textContent = `${event.target.name} is in focus!`
});

myInput.addEventListener("blur", function (event) {
  changeOutput.textContent = `${event.target.name} no longer has focus!`
});