var boy; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 boy = createSprite(250, 400, 100, 100);
 boy.Image("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stoneObj = new Stone(235, 420, 30, 30);
	mango1 = new mango(800, 100, 30, 30);
	mango2 = new mango(900, 150, 30, 30);
	mango3 = new mango(875, 125, 30, 30);
	mango4 = new mango(825, 175, 30, 30);
	mango5 = new mango(925, 165, 30, 30);
	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
	   Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
	   launcherObject.attach(stoneObj.body);
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

if(distance<=lmango.r+lstone.r){
	Matter.body.setStatic(lmango.body,false);
}

}