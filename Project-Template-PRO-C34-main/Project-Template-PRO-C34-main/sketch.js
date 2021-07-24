const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  polygon = new Polygon(600,height,40,40);
  chain = new Chain(polygon.body,{x:200,y:200});
}

function draw() {
  background(bg);
  Engine.update(engine);
  strokeWeight(5);
  textSize(20)
  textFont("Monaco") 
  fill(0, 0, 255);
  text("drag the polygon to launch!!!.",200,200)
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  polygon.display();
  chain.display();
  hero.display();
  rope.display();
  monster.display();

}

function mouseDrag (){
  Matter.Body.setPosition(polygon.body, {x:mouseX,y:mouseY});  
  strokeWeight(0);
}
function mouseRelease() {
    chain.fly();
  }
