


var landingImage
let deltarune;
function preload(){
  deltarune = loadFont('medium/PressStart2P-Regular.ttf');
  landingImage = loadImage('medium/landingpage.png');
}


var backgroundSidetoSide;
var backgroundUpAndDown;

let fade = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(deltarune);
  textSize(45);
  fill(200,148,58)
  stroke(73,24,6)
  strokeWeight(8)
  textAlign(CENTER)
}

function draw() {  
  backgroundSidetoSide = map(mouseX,0,width,0,25);
  background(0);
  
  backgroundUpAndDown = map(mouseY,0,width,0,25);
  background(0); 
  
  image(landingImage,backgroundSidetoSide-50,backgroundUpAndDown,width+100,height+100);

  

let alpha;
  if(fade){
    alpha = 255;
  } else {
    alpha = map(mouseX,0, width/2, 0, 255);
    alpha = constrain(alpha, 0, 255);
  
  if(alpha === 255) {
    fade = true;
    }
  }
  tint(255,alpha);
  fill(200,148,58,alpha);
  stroke(73,24,6,alpha);
  text('Tales of Deltarune',width/2,height/2+150)

}