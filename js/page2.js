var landdBanner;
var light;
var dark;
let deltarune;
let fadeToWhite = false;

function preload(){
  deltarune = loadFont('medium/PressStart2P-Regular.ttf'); 
  landdBanner = loadImage('medium/landdbanner.png')
  light = loadImage('medium/shatteredlightener.png')
  dark = loadImage('medium/shattereddarkener.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(deltarune);
  textAlign(CENTER); 
  textSize(20);
  fill(255);
}

function draw() {
  background(0);
 downAndUp = map(mouseX, 0, width, height+500, -height+100);
  upAndDown = map(mouseX, 0, width, -height + 500, height+100);
  
    let alpha;
  if(fadeToWhite) {
    alpha = 0;} else {
    alpha = map(mouseX,4*width/5, width, 0, 255);
    alpha = constrain(alpha, 0, 255); 
    if(alpha === 255) {
      fadeToWhite = true;
    }
  }
  
  background(210,143,27, alpha);
  imageMode(CENTER);
  image(landdBanner, width/4, downAndUp,width/2,height/2);
  textAlign(RIGHT);
  text("For millenia,\n Light and dark have\n lived in balance,\n bringing peace to\n the world", 3* width/4+150, upAndDown);
}