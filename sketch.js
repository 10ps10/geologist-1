const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron,stone,rubber;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron= new Iron(300,100)
    stone = new Stone(700,100);
    rubber = new Rubber(200,100,30);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();

    
 
}