class Ball {
    constructor(x,y,radius){
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body =  Bodies.circle(290,600,20,options)
    World.add(world,this.body)
    }
}