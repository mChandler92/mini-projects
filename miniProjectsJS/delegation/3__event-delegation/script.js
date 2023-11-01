// Write your code below
const myList = document.getElementById("myList")

myList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("selected")
  }
})