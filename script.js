// Get the canvas element and its 2D context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Function to draw a curved line from previous to current mouse position
function drawCurveLine(prevX, prevY, currX, currY) {
  // Draw a quadratic curve from prevX, prevY to currX, currY
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  // Control point is halfway between prev and current position
  const cx = (prevX + currX) / 2;
  const cy = (prevY + currY) / 2;
  ctx.quadraticCurveTo(cx, cy, currX, currY);
  ctx.strokeStyle = '#000'; // Black color
  ctx.lineWidth = 5; // Line width
  ctx.lineCap = 'round'; // Rounded line ends
  ctx.stroke();
}

// Function to generate random coordinates within canvas bounds
function getRandomCoordinates() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  return { x, y };
}

// Function to animate drawing random curved lines
function animateDrawing() {
  const startPoint = getRandomCoordinates();
  let prevX = startPoint.x;
  let prevY = startPoint.y;

  const animate = () => {
    const endPoint = getRandomCoordinates();
    const currX = endPoint.x;
    const currY = endPoint.y;

    drawCurveLine(prevX, prevY, currX, currY);

    prevX = currX;
    prevY = currY;

    requestAnimationFrame(animate);
  };

  animate();
}

// Start the animation
animateDrawing();
