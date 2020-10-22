class paper{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter,options)
        this.diameter = this.diameter
        World.add(world,this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(246, 38, 129)
        ellipse(pos.x,pos.y,this.diameter);
        pop();
    }
}