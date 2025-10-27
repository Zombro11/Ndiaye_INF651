// Get references to DOM elements
const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const outputDiv = document.getElementById('outputDiv');
const mouseTracker = document.getElementById('mouseTracker');
const coordinates = document.getElementById('coordinates');

// Function to handle form submission
function handleSubmit() {
  const name = nameInput.value.trim();

  if (name === "") {
    // Show error if input is empty
    outputDiv.textContent = "Error: Please enter a name.";
    outputDiv.style.backgroundColor = "transparent";
    outputDiv.style.color = "red";
  } else {
    // Show welcome message
    outputDiv.textContent = `Welcome, ${name}!`;
    outputDiv.style.backgroundColor = "green";
    outputDiv.style.color = "white";
  }
}

// Click event for submit button
submitButton.addEventListener('click', handleSubmit);

// Keyboard event — trigger submit on Enter key
nameInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form reload
    handleSubmit(); // Trigger submit
  }
});

// Mouse movement tracking
mouseTracker.addEventListener('mousemove', function (event) {
  const rect = mouseTracker.getBoundingClientRect();
  const x = Math.floor(event.clientX - rect.left);
  const y = Math.floor(event.clientY - rect.top);
  coordinates.textContent = `Mouse Coordinates: X: ${x}, Y: ${y}`;
});

// Optional: Reset coordinates when the mouse leaves the tracker
mouseTracker.addEventListener('mouseleave', function () {
  coordinates.textContent = "Mouse Coordinates: X: 0, Y: 0";
});
