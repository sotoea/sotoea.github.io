class Trees{
 constructor(x, y){
  this.x = x;
   this.y = y;
 }
 
 drawTree(){
  fill(100, 20, 20);
  stroke(50, 10, 10);
  rect(this.x*10 +3, this.y*10, 4, 10);
  fill(50, 200, 20);
  stroke(10, 100, 10);
  strokeWeight(2);
  triangle(this.x*10+5, this.y*10-5,this.x*10+2, this.y*10+3,this.x*10+8, this.y*10+3);
 }
}
