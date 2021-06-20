var trex, trex_running, trex_collided;
var ground, fakeGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;

fakeGround = createSprite(5,200,200,20)
fakeGround.x = fakeGround.width /2;
fakeGround.visible = false;
}


function draw() {
  console.log(trex.y);
  background(220);

//jump when the space button is pressed
if (keyDown("space") && trex.y >= 166.5) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

if (fakeGround.x < 0) {
  fakeGround.x = fakeGround.width / 2;
}

trex.collide(fakeGround);
drawSprites();
}