//https://www.youtube.com/watch?v=bEyTZ5ZZxZs
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(220);
  stroke(4);

  //try changing these colors
  colorA = color(300, 200, 400);
  colorB = color(400, 300, 200);

  for (let i = 0; i < 12; i++) {
    //converts i to a fraction between 0 and 1
    position = map(i, 0, 12, 0, 1);
  
  //that position determines where the LerpedColor
  //is between colorA and colorB
  LerpedColor = lerpColor(colorA, colorB, position);

  
  fill(LerpedColor);
  rect(0,i*height/15,width,height/16);
}

}
