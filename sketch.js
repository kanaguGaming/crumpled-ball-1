
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	//cerate object
	//cerate dust bin
	dustbinObj=new dustbin(1200,650);
	//create paper ball
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
 //displaying the oobjects
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 //console
  console.log(paperObject);
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		//applying the force to the ball
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





