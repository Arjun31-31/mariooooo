var mario, marioRunning, marioCollide, bgImage, bg, brickGroup, brickImg;

function preload(){
    bgImage = loadImage("images/bgnew.jpg");
    marioRunning = loadAnimation("images/mar1.png","images/mar2.png","images/mar3.png","images/mar4.png","images/mar5.png","images/mar6.png","images/mar7.png");
    brickImg = loadImage("images/brick.png")
}
var h = window.innerHeight-500;
function setup() {
createCanvas(2000, h);
bg=createSprite(500,250);
bg.addImage(bgImage);
bg.scale=0.99;
//bg.velocityX=-5;

platform=createSprite(200,height-140,4000,10);
platform.visible=false;

mario=createSprite(200,h-400,50,60);
mario.addAnimation("running",marioRunning);
mario.scale=0.2;

brickGroup = new Group();
}

function draw() {
    background(0);
    mario.collide(platform);
    if(keyDown("up")){
        mario.velocityY=-20;
    }
    mario.velocityY=mario.velocityY+1.50;

    if(bg.x<100){
        bg.x=bg.width/4;
    }
    
    if(keyDown("left")){
        mario.x=mario.x-16;
    }
    if(keyDown("right")){
        mario.x=mario.x+16;
    }

    brickGeneration();

    for(var i = 0;i<brickGroup.length;i++){
        var temp = brickGroup.get(i);
        if(temp.isTouching(mario)){
            mario.collide(temp);
        }
    }

    if(mario.x<100){
        mario.x=100;
    }
    
    if(mario.y<50){
        mario.y=50;
    }
    console.log(mario.x);
    drawSprites();
}

function brickGeneration(){
    if(frameCount%70===0){
        var brick= createSprite(2000, 100, 40, 10);
        brick.y=random(50,1000);
        brick.addImage(brickImg);
        brick.velocityX=-5;
        brick.lifetime=500;
        brickGroup.add(brick);

    }
}