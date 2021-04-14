class Paper
{
	constructor(x,y,r)
	{
        var option={
         isStatic:false,
         restitution:0.3,
         friction:3,
         density:1.2,
        }
        this.r=r
		this.x=x;
		this.y=y;
		
		
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y,(this.r-20)/2,option)
		World.add(world,this.body);
	}
	display()
	{	
			push();
			translate(this.body.position.x,this.body.position.y);
			imageMode(CENTER);
			fill(255);
			image(this.image, 0,0,this.r,this.r);
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
	}

}