class Block{
  constructor(x, y, width, height) {
   var options = {
      isStactic: true,
      restitution: 1,
      friction: 0.5,
      density: 0.3
    }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
   }
   display(){
     rectMode(CENTER);
     fill ("skyblue");
     strokeWeight("1.5")
     rect(this.body.position.x,this.body.position.y,this.width,this.height)
   }
}