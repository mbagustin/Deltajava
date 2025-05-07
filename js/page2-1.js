var landdBanner;
var light;
var dark;
var timeToLoadNewPage = false;
let deltarune;
let fadeToBlack = false;
let alpha = 255;

function preload(){
  deltarune = loadFont('../medium/PressStart2P-Regular.ttf'); 
  landdBanner = loadImage('../medium/landdbanner.png');
  light = loadImage('../medium/shatteredlightener.png');
  dark = loadImage('../medium/shattereddarkener.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(deltarune);
  textAlign(CENTER); 
  textSize(20);
  fill(200,148,58);
}

function draw() {
 
 lightner = map(mouseX, 0, width, height+500, -height );
  darkner = map(mouseX, 0, width, -height, height +400);
  textFromAbove = map(mouseX, 0, width, -height, height+900);
if (!fadeToBlack) {
    alpha = map(mouseX, width / 6, width/3, 255, 0);
    alpha = constrain(alpha, 0, 255);
    if (alpha === 0) {
      fadeToBlack = true;
    }
  }
  background(alpha);
  imageMode(CENTER);
  textAlign(CENTER);
  fill(0);
  text("but if this harmony\n were to shatter...",width/2,height/2);
  image(light,width/3, lightner,width/2,height/2);
  image(dark, 3*width/4,darkner,width/2,height/2);
  fill(255)
    text("A terrible Calamity would occur...",width/2+50,textFromAbove);
}
  
 


