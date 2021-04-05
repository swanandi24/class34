class Rope{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:350
        }
        this.rope = Constraint.create(options)
        this.pointB = pointB;
        World.add(world, this.rope);
      }
      display(){
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(6);
            stroke(48,22,8);

                line(pointA.x, pointA.y, pointB.x, pointB.y);
                
            pop()
        
        
    
      }
}