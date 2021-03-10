class Paper{
    constructor(x,y){

    var options={
    'density': 1.2,
    'restitution' : 0.3,
    'friction': 0.5
    }

    this.x = x;
    this.y = y;

    this.width = 30;
    this.height = 30;
    this.image = loadImage("Screenshot (41).png");

    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);

    World.add(world,this.body);

    }

    display(){
        
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,120,130);
            pop();
    }

}


