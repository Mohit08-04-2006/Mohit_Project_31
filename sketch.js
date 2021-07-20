const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 200;

function setup() {
  var canvas = createCanvas(480,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,590,width,10);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k,490, 10, divisionHeight));
  }


   for (var j = 30; j <=width; j=j+50) { 
      plinkos.push(new Plinko(j,50));
   }

   for (var j = 60; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,100));
   }

    for (var j = 30; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,150));
   }

    for (var j = 60; j <=width-10; j=j+50) {
      plinkos.push(new Plinko(j,200));
   }

   for (var j = 30; j <=width; j=j+50){
     plinkos.push(new Plinko(j,250));
   }

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
  }

 for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
}