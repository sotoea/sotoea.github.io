

class Castle {
   constructor(x, y, own) {
    this.x = x;
    this.y = y;
    this.own = own;
    this.wood = 150;
    this.stone = 150;
    this.health = 1000;
   }
   
   drawCastle(){
     stroke(100, 100, 100);
     strokeWeight(2);
     strokeCap(ROUND);
     if(this.own){
    fill(175, 175, 200);
    stroke(100, 100, 100);
     }else{
       stroke(200, 25, 25);
       fill(50, 50, 50);
     }
    rect(this.x*10, this.y*10, 30, 20);
    
    rect(this.x*10, this.y*10-10, 7, 10);
    rect(this.x*10+11, this.y*10-10, 8, 10);
    rect(this.x*10+23, this.y*10-10, 7, 10);
    
    noStroke();
    fill(100,20,20);
    rect(this.x*10+11, this.y*10+10, 8, 10);
   }
}
