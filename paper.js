class paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:1.3


        }
      this.x=x;
      this.y=y,
      this.r=r
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
      World.add(world,this.body);
      this.image=loadImage("paper.png")
    }
    display()
    {
            
            var paperpos=this.body.position;

            push()
            translate(paperpos.x, paperpos.y);
            imageMode(CENTER)
            strokeWeight(3);
            fill(255,0,30)
            image(this.image,0,0,this.r,this.r);
            pop()

    }
    
}