
var uncracked;
var lightning;
var currentImageToDisplay;
var currentTextToDisplay;
let deltarune;
var counter = 0;

  

function preload(){
  deltarune = loadFont('../medium/PressStart2P-Regular.ttf'); 
  uncracked = loadImage('../medium/uncracked.png');
  lightning = loadImage('../medium/lightning.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(deltarune);
  textAlign(CENTER); 
  textSize(20);
  fill(255);
  imageMode(CENTER);
  currentImageToDisplay = uncracked;
  currentTextToDisplay = "The sky will run \nblack with terror,";
}

function draw() {
 background(255);

  
  image(currentImageToDisplay, width/2, height/2, 0,0);
  text(currentTextToDisplay, width/2,height/4);
  
  if (mouseIsPressed){
    // image(lightning,width/2,height/2,0,0);   
    background(255);
    fill(0);
    text("and the land will crack in fear,", width/2, 2*height/3); 
  }
  
  if(counter == 3){
    currentImageToDisplay = lightning;
    currentTextToDisplay = "Earth draws her final breath."
    text(currentTextToDisplay, width/2,height/4);
  }
  
}

function mousePressed(){
    counter+=1;
  print(counter)
}
  
 
