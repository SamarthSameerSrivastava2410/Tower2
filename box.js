class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      
      if(this.body.speed < 5){
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
      }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 1;
         tint(255,this.Visiblity);
         pop();
       }
      }
    score(){
       if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
        }
    }
  };
