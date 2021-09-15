var bad
function setup() {
  createCanvas(400,400);
 bad=createSprite(200,200,50,50)
}

function draw() 
{
  background(30);
  if(keyDown("down")){
bad.velocityY=1
  }
drawSprites()
}




