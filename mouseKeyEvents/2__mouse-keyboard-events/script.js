// Write your code here
const myDiv = document.getElementById("my-div")
const myInput = document.getElementById("my-input")
const output = document.getElementById("output")

myDiv.addEventListener("mouseover", function () {
  myDiv.style.backgroundColor = "blue"
})

myDiv.addEventListener("mouseout", function () {
  myDiv.style.backgroundColor = "red"
})

myInput.addEventListener("keypress", function (event) {
  output.textContent = `You pressed and released the ${event.key} key!`
})