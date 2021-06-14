const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow=[];
var ground;
var bg,background1;
var ground;
var engine, world;
var charecter;
var bg2;

function preload(){
 bg=loadImage("snow2.jpg") 
 bg2=loadImage("charecter.webp");
}
function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
 background1=createSprite(500,250,1000,500)
 background1.addImage(bg);
 background.VelocityX=-2;
 ground=new Ground(500,480,1000,30)
 
  charecter=createSprite(90,360,50,50)
  charecter.addImage(bg2)
}
function draw() {
  
  background(0); 
 drawSprites();
 ground.display();
 if(frameCount%20===0){
  snow.push(new Snow(random(width/2-10,width/2+10),40,40))
}
for (var k = 0; k < snow.length; k++) {
  snow[k].display();
}

}
