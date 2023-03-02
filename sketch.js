var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(175, 122, 197);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  ellipse(45, 60, 100, 100);
  fill(252, 187, 252);
}
