const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var snow  = [];
var rend = [];


function preload() {
    backgroundImg = loadImage("snow1.jpg")
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    
}

function draw(){
    
        background(backgroundImg);
    
       
    
    Engine.update(engine);
    strokeWeight(4);
  var rend = Math.round(random(1,4))
  if (frameCount %5 === 0)
  {
    snow.push(new Snow (random (0,800),30,30))
  }
  for (var s = 0;s<snow.length;s++){
    snow[s].display();
  }
  drawSprites();
}
