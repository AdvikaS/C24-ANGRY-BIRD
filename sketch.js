// Renaming the Modules of  Matter.js library -- NameSpacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;

// declaring variables to hold engine and other objects in the simulation
var engine,world;

var ground,box1,box2,box3,box4,box5;
var bird;
var pig1,pig2;
var log1,log2,log3,log4;



function setup(){
  var canvas=createCanvas(1200,400);

  engine = Engine.create();
  
  // Renaming the world that is created automatically when an engine is created
  world = engine.world;

  //Json - Java Script Object Notation

  ground = new Ground(600,380,1200,20);
  bird = new Bird(200,100);

  //console.log(ground);

  box1= new Box(700,320,70,70);
  box2= new Box(920,320,70,70);
  pig1= new Pig(810,350);
  log1= new Log(810,260,300,PI/2);

  box3= new Box(700,240,70,70);
  box4= new Box(920,240,70,70);
  pig2= new Pig(810,220);
  log2= new Log(810,180,300,PI/2);

  box5= new Box(810,160,70,70);
  log3= new Log(760,120,150,PI/7);
  log4= new Log(870,120,150,-PI/7);

}
function draw()
{
  background("lightblue");

  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  bird.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  
}
