class ground {
    constructor(x,y,width,height){
        

        var option ={
            isStatic : true,
        }
        this.object = Bodies.rectangle(x,y,width,height,option);

        World.add(world,this.object);

    }
    display(){

        var pos = this.object.position
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);

    }
}