class Chain{
    constructor(pointA,pointB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
           pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Costraint.create(options)
        World.add(world,this.rope);
    }
}