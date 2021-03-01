 class Ground {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
        //console.log("inside Constructor "+ width);
        
        //console.log("inside Constructor "+ height);

        this.width= width;
        this.height= height;

    }

    display(){
        rectMode(CENTER);
        //console.log(this.width);
        //console.log(this.height)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

}