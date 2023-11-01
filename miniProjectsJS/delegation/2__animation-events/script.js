const box = document.getElementById("box")
const output = document.getElementById("output")


box.addEventListener("animationstart", function (event) {
  output.textContent = "The animation has started!"
})

box.addEventListener("animationend", function (event) {
  output.textContent = "The animation has ended!"
})