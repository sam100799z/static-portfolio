// script file

 

// Get the canvas element
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set the width and height of the canvas
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Create an array of characters
const characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

// Create an array of columns
const columns = Math.floor(canvasWidth / 20);

// Initialize the y positions of the columns
const yPositions = [];

for (let i = 0; i < columns; i++) {
  yPositions[i] = Math.random() * canvasHeight;
}

let animationStartTime = null; // Variable to store animation start time

// Update the matrix animation
function updateMatrix() {
  // Set the background color
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Set the text color and font
  ctx.fillStyle = "green";
  ctx.font = "12px timesnewroman";

  // Loop through each column
  for (let i = 0; i < columns; i++) {
    // Select a random character from the array
    const character = characters[Math.floor(Math.random() * characters.length)];

    // Set the y position of the current column
    const y = yPositions[i];

    // Draw the character at the current position
    ctx.fillText(character, i * 20, y);

    // Move the column down by 20 units
    yPositions[i] += 20;

    // Reset the position if it reaches the bottom of the canvas
    if (yPositions[i] > canvasHeight && Math.random() > 0.98) {
      yPositions[i] = 0;
    }
  }
}

// Render the matrix animation with a check for stopping time
function renderMatrix() {
  if (!animationStartTime) {
    animationStartTime = Date.now(); // Capture start time on first call
  }

  const elapsedTime = Date.now() - animationStartTime; // Calculate elapsed time

  if (elapsedTime < 9000) { // Stop after 10 seconds (10000 milliseconds)
    requestAnimationFrame(renderMatrix);
    updateMatrix();
  } else {
    console.log("Animation stopped after 10 seconds.");
  }
}

// Start the animation
renderMatrix();





