var first;
var seconds;
var third;
var textComeDown;
var timeToLoadNewPage = false;
function preload(){
 deltarune = loadFont('../medium/PressStart2P-Regular.ttf'); 
  human = loadImage('../medium/human.png');
  monster = loadImage('../medium/monster.png');
  prince = loadImage('../medium/darkprince.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(deltarune);
  textAlign(CENTER); 
  textSize(15);
  imageMode(CENTER);
}

function draw() {
  background(0);
  fill(255);
  first = map(mouseX,0,width,-height+500, height/2);
  seconds = map(mouseX,0,width,-height-1000, height/2);
  third = map (mouseX,0,width,-height-3000,height/2);
  textComeDown = map(mouseX, 0, width, -height, height/2+200);
  image(human, width/5, first, 200,300);
  text("The Human",width/5,textComeDown);
  image(monster,width/2,seconds,200,425);
  text("The Monster",width/2,textComeDown);
  image(prince, 4*width/5,third,200,300);
  text("The Prince\nof the Dark",4*width/5,textComeDown);
}

 // textFromAbove = map(mouseX, 0, width, -height, height+900);