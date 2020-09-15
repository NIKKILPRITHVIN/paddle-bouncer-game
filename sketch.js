var ball,img,paddle;
function preload() {

  ballimg=loadImage("ball.png");
  paddleimg=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   
    ball=createSprite(40,200,20,20);
  ball.velocityX=9;
  ball.addImage(ballimg);
  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
  
}
function draw() {
  background(300,100,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  paddle.collide(edges);
  ball.bounceOff(paddle,randomVelocity);

  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y=paddle.y+20; 
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(-8,8);
}

