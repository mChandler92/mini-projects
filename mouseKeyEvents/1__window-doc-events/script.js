console.log("LOAD EVENT:\n")

// Write your code here
window.addEventListener("load", function () {
  console.log("Page loaded successfully!")
})

document.addEventListener("readystatechange", function () {
  console.log("Ready state changed: " + document.readyState)
})

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded successfully!")
})