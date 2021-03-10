class Pure{
    constructor(x,y,width,height){

    this.x = x;
    this.y = y;

    this.width = 700;
    this.height = 700;
    this.image = loadImage("Screenshot (44).png");

    this.body = Bodies.rectangle(this.x,this.y,this.width,this.heights);

    World.add(world,this.body);

    }

    display(){
        
     imageMode(CENTER);
     image(this.image,1000,80,300,150);

    }

}


