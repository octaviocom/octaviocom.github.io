let windowThird=546

let marioY=350

let mario

function preload(){
  mario = loadImage('mario.png')
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER)
}

function draw() {
  
  print(mouseX, mouseY);
  
  //sky
  background(100, 163, 235);
  //background(random(0, 255), random(0, 255), random(0, 255));
  
  //lucky blocks
  fill(252, 240, 3)
  square(178, 232, 30);
  square(348, 232, 30);
  square(408, 232, 30);
  square(378,130,30)
  
  //normal blocks
  fill(179, 116, 9)
  square(378,232,30)
  square(318,232,30)
  square(438,232,30)
  
  
  
  //goomba
  fill(87, 45, 13)
  ellipse(350, 360, 50, 30);
  
  //cloud
  //  fill(233, 235, 232) 
  // circle(330, 60, 75);
  for(i=330; i<windowWidth; i=i+windowThird){ 
  fill(233, 235, 232) 
  circle(i, 60, 75);
  }
  
  
  //dark bush
  // fill(47, 112, 19)
  // arc(220, 374, 100, 75, 0, TWO_PI);
  for(i=220; i<windowWidth; i=i+windowThird){
    fill(47, 112, 19)
  arc(i, 374, 100, 75, 0, TWO_PI);
  }
  
  //light bushes
   fill(137, 245, 91)
  triangle(61,374,118,374,88,342)
  triangle(90,374,147,374,119, 342)
  triangle(120,374, 180, 374, 150,342)
  triangle(403,374, 463, 374, 433,342)
  // for(i=61; b=118; c=88; i<windowWidth; b<windowWidth; c<windowWidth; i=i+windowThird; b=b+windowThird; c=c+windowThird){
  //   triangle(i,374,b,374,c,342)
  // }
  //  for(i=90;b=374;c=147; i<windowWidth; i=i+windowThird){
  //   triangle(i,374,147,374,119, 342)
  // }
  // for(i=120; i<windowWidth; i=i+windowThird){
  //   triangle(i,374, 180, 374, 150,342)
  // }
  // for(i=403; i<windowWidth; i=i+windowThird){
  //   triangle(i,374, 463, 374, 433,342)
  // }


  //mario
  fill(237, 21, 21)
  image(mario, mouseX, marioY, 50, 50)
  if(mouseIsPressed == true){
    marioY = 207
  }else{
    marioY = 350
  }
  if(mouseIsPressed == false){
    marioY = 350
  }
  
  
  //floor
  fill(168, 81, 27)
  rect(0,375, windowWidth, windowHeight)
}