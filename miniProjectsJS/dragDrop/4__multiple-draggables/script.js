// Write your code here

const draggables = document.querySelectorAll('.draggable'); 
const dropzone = document.querySelector('.dropzone'); 


// For each draggable item, set data for drop zone (draggable element ID) and add "dragging-active" class
for (const draggable of draggables) {
  draggable.addEventListener('dragstart', (event) => { 
    event.dataTransfer.setData('text/plain', event.target.id);
    draggable.classList.add('dragging-active'); 
  });
  
  // Remove "dragging-active" class when dragging ends
  draggable.addEventListener('dragend', (event) => { 
    draggable.classList.remove('dragging-active');
  })
}

// Allow drop (drop not allowed by default)
dropzone.addEventListener('dragover', (event) => { 
  event.preventDefault(); 
}); 


// Append current draggable element to dropzone
dropzone.addEventListener('drop', (event) => { 
  event.preventDefault(); 
  const draggableId = event.dataTransfer.getData('text/plain'); 
  const element = document.getElementById(draggableId);
  
  // Check if dropzone has only one child element and if it is the placeholder element
  // If TRUE, use replaceChild() to the replace the placeholder with a draggable element
  // If FALSE, use appendChild() to add the draggable element to the dropzone
  if (
    dropzone.children.length === 1 
    && 
    dropzone.children[0].classList.contains('dropzone-placeholder')
  ) {
    dropzone.replaceChild(element, dropzone.children[0]); 
  } else {
    dropzone.appendChild(element); 
  }
});