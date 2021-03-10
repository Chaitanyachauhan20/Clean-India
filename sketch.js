
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper,cleanImage,clean;


function setup() {
	createCanvas(1600, 1200);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,40);
	dustbinObj=new dustbin(1200,650);
	paper = new Paper(200,300);
	clean = new Pure(600,6500);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("OffWhite");

  textSize(48);
  strokeWeight(4);
  fill("coral");
  text("Say no to trash !!",300,130);
  textSize(40);
  text("Scrrol down and press up arrow key to throw the trash in the dustbin.",40,200);
  text("Please be a responsible citizen,",200,50);
  text("Remember,",180,270);
  fill("Green");
  textSize(57);
  strokeWeight(6);
  text("Clean India Green India !!",410,273);
 

  groundObject.display();
  paper.display();
  dustbinObj.display();
  clean.display();
}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});

	}
}








