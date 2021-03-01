class Log {
    constructor(x,y,h,angle){
        var options= {
            friction: 1.0,
            restitution: 0.8
        }
        this.body= Bodies.rectangle(x,y,20,h,options);
        World.add(world,this.body);
        this.w=20;
        this.h=h;
        Body.setAngle(this.body,angle);
    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        strokeWeight(4)
        stroke("green");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}