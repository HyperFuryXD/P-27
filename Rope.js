class Rope{
    constructor(bodyA,bodyB){
var options = {
   bodyA:bodyA,
   bodyB:bodyB,
   length:400,
   stiffness:0.07
}
   this.chain = Constraint.create(options);
   World.add(world,this.chain);
    }
    display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(3);   
stroke("GREEN");     
line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}