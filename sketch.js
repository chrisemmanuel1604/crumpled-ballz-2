
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var engine, world;

function preload()
{
	dustbinImage=loadImage("dustbin.png");
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new paper (100,600,50);
    ground = new ground(400,680,800,20);
    leftSide = new dustbin(550,620,20,100);
	bottom = new dustbin(610,660,100,20);
	rightSide = new dustbin(670,620,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);

  paper.display();
  ground.display();
  image(dustbinImage,550,520,150,150)
  //leftSide.display();
  //rightSide.display();
  //bottom.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-110})
  }
}

