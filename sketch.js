const barWidth = 20;
let lastBar = -1;


function setup() {
  createCanvas(720, 400);
  colorMode(RGB, height, height, height);
  noStroke();
}

function draw() {
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
  
}
var button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, height, height, height);
  noStroke(0)
  
    let col = color(0 ,0 ,0, 0);
  
	button = createButton('untermusic');
	button.position(25, 25)
    button.style('background-color', col);
	button.mousePressed(gotolink)
    button.style("font-family","Verdana");
    button.style("font-size", "48px");
  
  
  function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

 
}

function gotolink() {
	window.open('http://untermusic.com/');
}


