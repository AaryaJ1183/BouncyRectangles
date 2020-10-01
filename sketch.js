const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Box1, Box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Box1 = new Box(200,100,50,100);
    Box2 = new Box(220,200,50,50);
    ground = new Ground(200,380,400,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    Box1.display();
    Box2.display();
    ground.display();

}