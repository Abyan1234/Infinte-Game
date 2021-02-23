
var player,ground,obstacle; 
var obstacleGroup;



function obstacles(){
  
if (World.frameCount%300 === 0) {
   obstacle = createSprite(430, 325, 20, 20);
  
   
      
 
  obstacle.velocityX=-8;
  obstacle.lifetime=110;
  
 
  obstacleGroup.add(obstacle);
 
  }
}
var Play=1;
var End=0;
var gameState=Play;

var score=0;
function setup(){
 player = createSprite(85, 325, 20, 20);

 ground = createSprite(300 ,360, 800, 15);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 
 obstacleGroup = createGroup();



}

function draw() {
  
  //Score Board
  background("black");
  stroke("black");
  textSize(20);
  fill("black");
  
  
  player.collide(ground);
  
  if (gameState===Play) {
    score=Math.ceil(frameCount/frameRate());
    fill("white");
    text("score: "+score ,100,50);
    
    //Endless Ground
    if (ground.x < 0) {
    ground.x=ground.width/2;
  }
  
  //objects
   
  obstacles();  
    
  //monkey jumps  
  if (keyDown("space")&&player.y  >=320 ) {
      player.velocityY=-14;
    }
     
 
       
   if (player.isTouching(obstacleGroup)) {
       gameState=End;
     }
       
      
    
  } else if (gameState===End) {
    
    player.destroy();
    obstacleGroup.destroyEach();
    ground.destroy();
   textSize(22);
   fill("white");
   text("Game Over",200,200)
   
  }
   
  
  //Adds Gravity
  player.velocityY=player.velocityY+0.65;
  
  
    
  drawSprites();
  
}