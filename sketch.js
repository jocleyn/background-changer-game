
function setup() {
  createCanvas(400,400);
  background('darkgrey')
}

function draw() {
//background('red');


if (keyDown(DOWN_ARROW)) {
background('red');
}
if (keyDown(LEFT_ARROW)) {
background('orange')
}
if (keyDown(RIGHT_ARROW)) {
  background('yellow')
  }
  if (keyDown(UP_ARROW)) {
    background('#32CD32')
    }

}