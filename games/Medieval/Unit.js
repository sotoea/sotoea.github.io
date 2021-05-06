class Unit {
  constructor(x, y, type, health, target) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.health = health;
    this.target = target;
    this.resource = null;
    this.castleDirection = false;
    this.working = false;
    this.moving = false;
    this.workerTime = 0;

    this.resourceIndex = 0;
  }

  drawUnit() {
    stroke(0);
    if (this.type == 0) {
      fill(0, 0, 250);
      circle(this.x*10, this.y*10, 7);
    } else if (this.type == 1) {
      fill(200, 200, 0);
      circle(this.x*10, this.y*10, 7);
    }
  }

  updateWorker(stones, trees, castle) {
    
    if (!this.working && !this.moving) {
      if (this.target == 0) { //collect stone
        this.resourceIndex = round(random(0, stones.length - 1));
        this.resource = 'stones';
        this.moving = true;
      } else { //collect trees
        this.resourceIndex = round(random(0, trees.length - 1));
        this.resource = 'trees';
        this.moving = true;
      }
    } else if (this.moving) {

      var dx;
      var dy;
      if (this.castleDirection) {
        dx = castle.x - this.x;
        dy = castle.y - this.y;
      }
      else if (this.resource == 'stones') {
        dx = stones[this.resourceIndex].x - this.x;
        dy = stones[this.resourceIndex].y - this.y;
      } else if (this.resource == 'trees') {
        dx = trees[this.resourceIndex].x - this.x;
        dy = trees[this.resourceIndex].y - this.y;
      }
      var mag = sqrt((dx*dx) + (dy*dy));
      dx = dx/mag;
      dy = dy/mag;
      this.x += dx/3;
      this.y += dy/3;
      if (mag < 1) {
        this.moving = false;
        this.working=true;
        this.workerTimer = 120;
      }
    } else if (this.working) {
      this.workerTimer--;

      if (this.workerTimer < 0) {

        if (this.castleDirection) {
          this.moving = false;
          if(this.resource == 'trees'){
            castle.wood += 25;
          }else if(this.resource == 'stones'){
            castle.stone += 25;
          }
        } else {
          this.moving = true;
        }
        this.working = false;
        this.castleDirection = !this.castleDirection;
      }
    }
  }
}
