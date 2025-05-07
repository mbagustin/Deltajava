var channel;
var banishment;
let deltarune;
var currentImageToDisplay;
var counter = 0;
var timeToLoadNewPage = false;

function preload(){
  deltarune = loadFont('medium/PressStart2P-Regular.ttf'); 
  channel = loadImage('medium/channeling.png');
  banishment = loadImage('medium/banishment.png');
}

function keyPressed(){
    counter+=1;
  print(counter)
}
function setup() {
  createCanvas(windowWidth, windowHeight); 
  textFont(deltarune);
  textAlign(CENTER); 
  textSize(30);
  fill(255);
  imageMode(CENTER);
  currentImageToDisplay = channel;
}

function draw() {
  background(0); 
    image(currentImageToDisplay, width/2, height/2, 0,0);

  if (keyIsPressed){  
    background(210,143,27);
    fill(0);
    text("Only they can seal the fountains \nand banish the ANGELS HEAVEN,", width/2, height/2); 
  }
    if(counter == 1)
    currentImageToDisplay = banishment;
  }
  