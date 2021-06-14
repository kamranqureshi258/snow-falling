class Snow{
    constructor(x,y,radius){
        var options={
            'density':10,
            'friction':1
        }
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
        this.image=loadImage("snow5.webp")
    }
    display(){
        var  pos=this.body.position;
        var angle=this.body.angle;
        push ()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("blue");
        image(this.image,0,0,this.radius,this.radius);
        pop()
    }
}