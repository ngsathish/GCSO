var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
car = createSprite(1200, 50, 50, 20);
car1 = createSprite(1200, 150, 50, 20);
car2 = createSprite(1200, 250, 50, 20);
car3 = createSprite(1200, 350, 50, 20);
speed = random(-55,-90);
speed1 = random(-55,-90);
speed2 = random(-55,-90);
speed3 = random(-55,-90);
weight = random(400,1500);
weight1 = random(400,1500);
weight2 = random(400,1500);
weight3 = random(400,1500);
wall1 = createSprite(800,200,1600,10);
wall2 = createSprite(800,100,1600,10);
wall3 = createSprite(800,300,1600,10);
inviwall = createSprite(0,200,10,400);
inviwall.visible = false;
deform = (0.5 * weight * speed * speed) / 2;
deform1 = (0.5 * weight1 * speed1 * speed1) / 2;
deform2 = (0.5 * weight2 * speed2 * speed2) / 2;
deform3 = (0.5 * weight3 * speed3 * speed3) / 2;
}

function draw() {
  background("blue");

  if (car.isTouching(inviwall)){
    car.collide(inviwall)
   if (deform < 100){
      car.shapeColor = "green";
   }
   else  if (deform >= 100 && deform <= 180){
    car.shapeColor = "yellow";
 }
 else  if (deform > 180){
  car.shapeColor = "red";
}
    }

  if (car1.isTouching(inviwall)){
    car1.collide(inviwall)
    if (deform1 < 100){
      car1.shapeColor = "green";
   }
   else  if (deform1 >= 100 && deform1 <= 180){
    car1.shapeColor = "yellow";
 }
 else  if (deform1 > 180){
  car1.shapeColor = "red";
}
  } 
   if (car2.isTouching(inviwall)){
    car2.collide(inviwall)
    if (deform2 < 100){
      car2.shapeColor = "green";
   }
   else  if (deform2 >= 100 && deform2 <= 180){
    car2.shapeColor = "yellow";
 }
 else  if (deform2 > 180){
  car2.shapeColor = "red";
}
  } 
   if (car3.isTouching(inviwall)){
    car3.collide(inviwall)
    if (deform3 < 100){
      car3.shapeColor = "green";
   }
   else  if (deform3 >= 100 && deform3 <= 180){
    car3.shapeColor = "yellow";
 }
 else  if (deform3 > 180){
  car3.shapeColor = "red";
}
  }


  car.velocityX = speed;
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  wall1.shapeColor = "80,80,80" ; 
  wall2.shapeColor = "80,80,80" ;
  wall3.shapeColor = "80,80,80";
  drawSprites();
}