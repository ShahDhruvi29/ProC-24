var paperObject,ground1;
var box1,box2,box3;
var crumpy;
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
paperObject= new Ball(290,600,20)
	box1= new Dustbin(490,610,20,100)
	box1.shapeColor=color("red")
	box2= new Dustbin(590,650,200,20)
	box2.shapeColor=color("red")
	box3= new Dustbin(690,610,20,100)
	box3.shapeColor=color("red")
	
	ground1= new Floor(390,670,800,20)
	ground1.shapeColor=color("purple")
	
	Engine.run(engine);
  
}


function draw() {
	background("lightgreen");
  rectMode(CENTER)
  drawSprites();
 
}
 
function display(){
	paperObject.display();
	box1.display();
	box2.display();
	box3.display();
	ground1.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

