var PLAY = 1;
var END = 0;
var gameState = PLAY;
var runman, runman_running;
var Apple ,AppleImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground, player;
var score;
var appleGroup, obstacleGroup;

function preload(){
bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  runman_running = loadImage("image-asset.gif");
}

function setup(){
    createCanvas(600, 600);
  
  player = createSprite(100, 340, 20, 50);
  player.addAnimation("runman", runman_running); 
  player.scale=0.1;
  
  ground = createSprite(400, 370, 800, 10);
  
     appleGroup = new Group();
   obstacleGroup = new Group();
  
  score = 0;
  
}

function draw(){
  background("white");
  
  text("Score: "+ score, 500,50); 
  
  if(gameState===PLAY){
  
    ground.velocityX = -4;
  ground.x=ground.width/2;
  
  if(keyDown("space")&&player.y >=334.3) {
  player.velocityY=-5;

    player.velocityY = player.velocityY + 0.1;
     player.collide(ground);
    
    if(gameState===END){
      ground.velocityX=0;
      player.velocityX=0;
      
       obstacleGroup.setVelocityEach(0);
    appleGroup.setVelocityEach(0);
    obstacleGroup.setLifetimeEach(-1);
    appleGroup.setLifetimeEach(-1);  
    }
  }
   if(appleGroup.isTouching(player)){
      appleGroup.destroyEach();
      score = score+1;
      
    }
   else if(obstacleGroup.isTouching(player)){
     gameState=END;
      
      
    }
}
  drawSprites();
console.log(player.y);
  apple1();
  obstacle1();
}
function apple1(){
 if(World.frameCount%80===0){
  Apple = createSprite(600, 120, 40, 10);
  Apple.addImage(AppleImage);
  Apple.y=Math.round(random(120, 200));
  Apple.scale=0.1; 
  Apple.velocityX = -3; 
  Apple.lifetime = 200; 
   
  appleGroup.add(Apple);
 }
}
  function obstacle1(){
 if(World.frameCount%300===0){
 obstacle = createSprite(600, 340, 20, 50);
 obstacle.addImage(obstacleImage);
 obstacle.scale=0.15;
 obstacle.lifetime=300;
 obstacle.velocityX=-4; 
   
 obstacleGroup.add(obstacle);  
   
 }
    
    
}




