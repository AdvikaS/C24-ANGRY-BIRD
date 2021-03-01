class Box {
    constructor(x,y,w,h){
        var options= {
            friction: 1.0,
            restitution: 0.8
        }
        this.body= Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w=w
        this.h=h
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