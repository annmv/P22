const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, helicopter, box;
var image1;

function preload(){
image1 = loadImage("helicopter.png");	
} 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
	world = engine.world;
	var options = {
		isStatic: true
	}
    ground = Bodies.rectangle(200,390,400,20,options);
	box = Bodies.rectangle(200,100,30,30,options);
	helicopter = Bodies.rectangle(200,100,200,50,options);
	World.add(world,ground);
	World.add(world,box);
	World.add(world,helicopter);
}

function draw() {
	background("black");
	Engine.update(engine);
	rectMode(CENTER);
	rect(ground.position.x,ground.position.y,400,20);
	rectMode(CENTER);
	rect(box.position.x,box.position.y,30,30);
	imageMode(CENTER);
	image(image1,helicopter.position.x,helicopter.position.y,200,50);
	Engine.update(engine);
}

function keyPressed() {
	if(keyCode===(DOWN_ARROW)) 
	{
		Matter.Body.setStatic(box,false);
	}
}