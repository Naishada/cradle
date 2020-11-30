
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiameter = 80;
var create;
var roof1;
var bobObject1,bobObject2,bodObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,45,700,30);
	bobObject1 = new Bob(555,620);
	bobObject2 = new Bob(475,620);
	bobObject3 = new Bob(395,620);
	bobObject4 = new Bob(315,620)
	bobObject5 = new Bob(235,620);
	rope1 = new Rope(bobObject1.body,roof1.body,bobDiameter*2,0)
	rope2 = new Rope(bobObject2.body,roof1.body,bobDiameter*1,0)
	rope3 = new Rope(bobObject3.body,roof1.body,0,0)
	rope4 = new Rope(bobObject4.body,roof1.body,-bobDiameter*1,0)
	rope5 = new Rope(bobObject5.body,roof1.body,-bobDiameter*2,0)

		Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  
background("pink")
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  fill("blue");
  text(mouseX+","+mouseY,mouseX,mouseY);


}
function keyPressed(){
	if(keyCode === LEFT_ARROW){ 
	  Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:100,y:200});
	}
	}