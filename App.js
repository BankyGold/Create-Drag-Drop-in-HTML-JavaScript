// Get the draggable element
const draggable = document.getElementById('drag1');

// Add dragstart event listener
draggable.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text', event.target.id);
});

// Get the droppable element
const droppable = document.getElementById('drop1');

// Add dragover event listener to allow drop
droppable.addEventListener('dragover', function(event) {
    event.preventDefault();
});

// Add drop event listener
droppable.addEventListener('drop', function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);
    event.target.appendChild(draggedElement);
});
