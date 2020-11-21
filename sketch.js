const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1 , ground , string , hex;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(380,360,200,20);
    block1=new Block(330,235);
    block2=new Block(360,235);
    block3=new Block(390,235);
    block4=new Block(450,235);
    block5=new Block(420,235);
    block6=new Block(360,195);
    block7=new Block(390,195);
    block8=new Block(420,195);
    hex = new Hex(1000,250);
    string=new Launcher(hex.body,{x:800,y:250});


}

function draw() {
  background("lightblue");
  Engine.update(engine);
  ground.display();
 drawSprites();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();

  hex.display();

  string.display();
  //block1.display();
  


}
function mouseDragged()
{
	Matter.Body.setPosition(hex.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	string.fly();
}
function keyPessed(){
  if(keyCode === 32){
    Matter.Body.setPosition(hex.body, {x:800, y:250});
  }
}