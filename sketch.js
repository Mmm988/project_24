
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var paper,ground;
var box1,box2,box3;

function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);

	engine=Engine.create();
	world = engine.world;

	ground=new Ground(400,380,800,20)

	paper=new Ball(150,320,15);

	box1=new Box(600,365,200,10)

	box2=new Box(505,320,10,80)

	box3=new Box(695,320,10,80)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  keyPressed();
  drawSprites(); 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.Body,paper.Body.position,{x:85,y:-85})
	}
}