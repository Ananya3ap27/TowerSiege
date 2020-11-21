class Hex {
    constructor(x, y) {
      var options = {
        isStatic:false,
          'restitution':0.8,
          'friction':0.1,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0,0, 20, 20);
      pop();
    }
  };