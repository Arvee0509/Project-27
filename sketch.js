
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(200,350,20,20);
	bobObject2=new Bob(220,350,20,20);
	bobObject3=new Bob(240,350,20,20);
	bobObject4=new Bob(260,350,20,20);
	bobObject5=new Bob(280,350,20,20);
	rope1=new Rope(bobObject1.body,roofObject.body,bobDiameter);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  drawSprites();
 
}



