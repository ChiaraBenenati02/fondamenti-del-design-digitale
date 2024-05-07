let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (200, 400, 100);
}

function draw() {
  stroke (10, 30, 70);
  strokeWeight (7);
  ellipse (x, y, 40);

  x = x + 50;
  
  if (x > windowWidth) {
    x = 0;
    y = y + 50; 
    }
  }