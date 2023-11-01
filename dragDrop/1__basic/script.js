// Write your code here
const draggable = document.getElementById('draggable');
const dropzone = document.querySelector('.dropzone');
const dropzonePlaceholder = document.querySelector('.dropzone-placeholder');

// Set draggable data for drop zone (draggable element ID) and adding "dragging-active" class
draggable.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
});

// Allow drop (drop not allowed by default)
dropzone.addEventListener('dragover', (event) => {
  event.preventDefault();
});


// Append draggable element to dropzone
dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  const draggableId = event.dataTransfer.getData('text/plain');
  console.log(draggableId);
  const element = document.getElementById(draggableId);
  dropzone.replaceChild(element, dropzone.children[0]);

});