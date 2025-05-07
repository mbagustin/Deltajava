var landingImage;
var timeToLoadNewPage = false;
let deltarune;
function preload(){
  deltarune = loadFont('../medium/PressStart2P-Regular.ttf');
  landingImage = loadImage('../medium/kingdom.png');
}


var backgroundSidetoSide;
var backgroundUpAndDown;

let fade = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(deltarune);
  textSize(24);
  fill(255);
  textAlign(CENTER);

}

function draw() {  
  backgroundSidetoSide = map(mouseX,0,width,0,25);
  background(0);
  
  backgroundUpAndDown = map(mouseY,0,width,0,25);
  background(0); 
  
  image(landingImage,backgroundSidetoSide,backgroundUpAndDown-100,width+100,height+100);

  text('only then will\nbalance be restored',width/2,height/2+150);
}