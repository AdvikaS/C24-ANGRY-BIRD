class Bird {
    constructor(x,y){
        var options= {
            friction: 1.0,
            restitution: 0.8
        }
        this.body= Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.w= 50;
        this.h= 50;
    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        pos.x= mouseX;
        pos.y= mouseY;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        strokeWeight(4)
        stroke("blue");
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }

}
