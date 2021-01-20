var bullet,thickness,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 100, 20);
  bullet.shapeColor = "white";
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80);
  
 
  bullet.velocityX = speed; 
}

function draw() {
  background('black'); 
 
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    bullet.x = wall.x - 30;
    var damage = 0.5 * weight * speed *speed/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor = "red"
    }
    else {
      wall.shapeColor = "green"
    }

   

  }
  drawSprites();
}