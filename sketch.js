var Paper1;
var Ground1;
var Pan1, Pan2, Pan3


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Ground1 = new Ground(400,650,800,20);
	
	Paper1 = new paper(100,600,20,20)

	Pan1 = new Pan(600,630,300,20)
	Pan2 = new Pan(450,580,20,120)
	Pan3 = new Pan(750,580,20,120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Ground1.display();
  Paper1.display();
  Pan1.display();
  Pan2.display();
  Pan3.display();
}


function keyPressed() {
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:60,y:100});
	}
}




