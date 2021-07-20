class Particles {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restituion:0.5,
            density:0.5
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.color = color(random(0,255), random(0,255), random(0,255));
        World.add(world,this.body);

    }

     display(){
         push();
         fill(this.color);
         ellipseMode(RADIUS);
         ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
         pop();
         
     }

}