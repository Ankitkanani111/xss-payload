// Create a new image element
const img = document.createElement('img');

// Set the src attribute to a non-existent resource that will trigger the onerror event
img.src = 'x';

// Set up the onerror event handler to execute JavaScript code
img.onerror = function() {
    alert('XSS');
};

// Append the image to the body of the document to make it part of the DOM
document.body.appendChild(img);
