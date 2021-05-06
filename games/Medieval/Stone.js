class Stone{
  constructor(x, y){
  this.x = x;
   this.y = y;
 }
 
 drawStone(){
  fill(125, 125, 125);
  stroke(50, 50, 50);
  beginShape();
  vertex(this.x*10, this.y*10);
  vertex(this.x*10+5, this.y*10-2);
  vertex(this.x*10+9, this.y*10-2);
  vertex(this.x*10+10, this.y*10+5);
  vertex(this.x*10+10.1, this.y*10+6);
  vertex(this.x*10, this.y*10+6.1);
  endShape(CLOSE);

 }
}
