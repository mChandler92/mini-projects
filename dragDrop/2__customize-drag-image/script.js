const draggable = document.getElementById('draggable'); 
const dropzone = document.querySelector('.dropzone'); 


// Set draggable data for drop zone with restricted data type, and add "dragging-active" class
draggable.addEventListener('dragstart', (event) => { 
  event.dataTransfer.setData('text/uri-list', event.target.id);
});


// Allow drop ONLY if type of data is 'text/plain'
dropzone.addEventListener('dragover', (event) => { 
  const types = event.dataTransfer.types; 
  if (types.includes('text/plain')) { 
    event.preventDefault();
    // NOTE: As it is, our draggable element won't be dropped here because it's type is 'text/uri-list'
  }  
}); 


// Append draggable element to dropzone (won't work in this case)
dropzone.addEventListener('drop', (event) => { 
  event.preventDefault(); 
  const draggableId = event.dataTransfer.getData('text/plain'); 
  const element = document.getElementById(draggableId);
  dropzone.replaceChild(element, dropzone.children[0]); 
});