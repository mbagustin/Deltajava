var worldsedge;
var fadeToWhite = false;
let alpha = 255;
var timeToLoadNewPage = false;
var backgroundSidetoSide;
var backgroundUpAndDown;

function preload(){
 deltarune = loadFont('../medium/PressStart2P-Regular.ttf'); 
 worldsedge = loadImage('../medium/summoned.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(deltarune);
  textAlign(CENTER); 
  textSize(24);
}

function draw() {
 background(0);
  backgroundSidetoSide = map(mouseX,0,width,0,25);
  background(0);
  
  backgroundUpAndDown = map(mouseY,0,width,0,25);
  background(0); 
  fill(255);
  text("Three heroes appear at worlds’ edge.",width/2,height/2)
  
    let alpha;
  if(fadeToWhite) {
    alpha = 0;} else {
    alpha = map(mouseX,width/4, width, 0, 255);
    alpha = constrain(alpha, 0, 255); 

  }
  tint(255,alpha);
  image(worldsedge,backgroundSidetoSide-50,backgroundUpAndDown,width+100,height+100);  
}

