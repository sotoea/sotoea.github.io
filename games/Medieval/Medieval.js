
let workerType = 0;

let terrain = [];
let tinfo = [];

let castle;
let enemyCastle = [];

let trees = [];
let stones = [];

let buildWorker, buildInfantry;

let attackNorth, attackSouth, retreat;
let attackingN = false;
let attackingS = false;

let workers = [];
let infantry = [];

function setup() {

  createCanvas(1000, 900);
  frameRate(30);
  setupObjs();

  attackNorth = createButton('Attack North');
  attackNorth.position(10, 810);
  attackNorth.mousePressed(attackN);
  attackSouth = createButton('Attack South');
  attackSouth.position(10, 840);
  attackSouth.mousePressed(attackS);
  retreat = createButton('Retreat');
  retreat.position(10, 810);
  retreat.mousePressed(retreatTroops);
  retreat.hide();


  createWorker = createButton('Build Worker<br>25 Tree + 10 Stone');
  createWorker.position(620, 810);
  createWorker.mousePressed(createWorkers);
  createInfantry = createButton('Build Infantry<br>25 Tree + 50 Stone');
  createInfantry.position(620, 850);
  createInfantry.mousePressed(createInfantrys);
}

function createWorkers() {
  if (castle.wood >= 25 && castle.stone >= 10) {
    workers.push(new Unit( castle.x, castle.y, 0, 30, workerType));
    castle.wood -= 25;
    castle.stone -= 10;
    if(workerType == 0){ workerType = 1;}
    else{ workerType = 0;}
  }
}

function createInfantrys() {
}

function attackN() {
  attackingN = true;
  retreat.show();
  attackNorth.hide();
  attackSouth.hide();
}

function attackS() {
  attackingS = true;
  retreat.show();
  attackNorth.hide();
  attackSouth.hide();
}

function retreatTroops() {
  attackingN = false;
  attackingS = false;
  attackNorth.show();
  attackSouth.show();
  retreat.hide();
}

function draw() {
  background(0);
  noStroke();
  for (var i = 0; i < width; i+= 10) {
    for (var j= 0; j < height-100; j+= 10) {
      fill(terrain[i/10][j/10]);
      rect(i, j, 10, 10);
    }
  }
  update();

  trees.forEach(function(t) {
    t.drawTree();
  }
  );
  stones.forEach(function(s) {
    s.drawStone();
  }
  );

  castle.drawCastle();

  enemyCastle.forEach(function(entry) {
    entry.drawCastle();
  }
  );
  workers.forEach(function(w) {
    w.drawUnit();
  }
  );
  drawGui();
}

function update() {
  workers.forEach(function(w) {
    w.updateWorker(stones, trees, castle);
  }
  );
}

function drawGui() {
  fill(200, 200, 200);
  rect(780, 800, 220, 900);
  //trees
  fill(100, 20, 20);
  stroke(50, 10, 10);
  rect(80*10 +3, 81.2*10, 4, 10);
  fill(50, 200, 20);
  stroke(10, 100, 10);
  strokeWeight(2);
  triangle(80*10+5, 81.2*10-5, 80*10+2, 81.2*10+3, 80*10+8, 81.2*10+3);
  stroke(0);
  textSize(20);
  text("= " + castle.wood.toString(), 82 * 10, 82 * 10);

  //Stones
  fill(125, 125, 125);
  stroke(50, 50, 50);
  beginShape();
  vertex(80*10, 83.2*10);
  vertex(80*10+5, 83.2*10-2);
  vertex(80*10+9, 83.2*10-2);
  vertex(80*10+10, 83.2*10+5);
  vertex(80*10+10.1, 83.2*10+6);
  vertex(80*10, 83.2*10+6.1);
  endShape(CLOSE);
  text("= " + castle.stone.toString(), 82 * 10, 84 * 10);

  //Workers
  stroke(0);
  fill(0, 0, 250);
  circle(80.5*10, 85.7*10, 10);
  text("= " + workers.length.toString(), 82 * 10, 86.2 * 10);
  //Infantry
  fill(200, 200, 0);
  circle(80.5*10, 87.7*10, 10);
  text("= " + infantry.length.toString(), 82 * 10, 88.2 * 10);
}

function mousePressed() {
}

function mouseReleased() {
}

function setupObjs() {
  noStroke();
  fill(30);
  var terra = [];
  var tmpinfo = [];
  for (var i = 0; i < width; i+=10) {

    for (var j = 0; j < height-100; j+=10) {

      var n = noise(i / 120, j / 120);
      tmpinfo.push(n);

      // 0.3 < grass < 0.65
      var col = (0, 0, 0);
      if (n > 0.650) {
        col = map(n, 0.8, 1, 200, 255);
        terra.push([20, 50, col]);
      } else if (n < 0.2) {
        col = map(n, 0, 0.25, 255, 155);
        terra.push([col, col, col]);
      } else if (n >= 0.2 && n < 0.3) {
        if (random(0, 1) > 0.85) {
          stones.push(new Stone(i/10, j/10));
        }
        var red = map(n, 0, 1, 50, 150);
        var green = map(n, 0, 1, 20, 150);
        var blue = map(n, 0, 1, 0, 200);
        terra.push([red, green, blue]);
      } else {
        if (n < 0.4 && n > 0.3) {
          if (random(0, 1) > 0.85) {
            trees.push(new Trees(i/10, j/10));
          }
        }
        var r = map(n, 0, 1, 20, 75);
        var g = map(n, 0, 1, 100, 200);
        var b = map(n, 0, 1, 0, 33);
        terra.push([r, g, b]);
      }
    }
  }
  for (var ii = 0; ii < width; ii+= 10) {
    terrain[ii/10] = [];
    tinfo[ii/10] = [];
    for (var jj= 0; jj < height-100; jj+= 10) {

      terrain[ii/10].push(terra[jj/10+(terra.length - (terra.length - (ii/10*80)))]);
      tinfo[ii/10].push(tmpinfo[jj/10+(tmpinfo.length - (tmpinfo.length - (ii/10*80)))]);
    }
  }

  var placing = true;
  var rndx;
  var rndy;
  while (placing) {
    rndx = round(random(25, 75));
    rndy = round(random(30, 40));

    if ((tinfo[rndx][rndy] <= 0.65 && tinfo[rndx][rndy] >= 0.3) &&
      (tinfo[rndx+1][rndy] <= 0.65 && tinfo[rndx+1][rndy] >= 0.3) &&
      (tinfo[rndx+2][rndy] <= 0.65 && tinfo[rndx+2][rndy] >= 0.3) &&
      (tinfo[rndx+3][rndy] <= 0.65 && tinfo[rndx+3][rndy] >= 0.3) &&
      (tinfo[rndx-1][rndy] <= 0.65 && tinfo[rndx-1][rndy] >= 0.3) && // First
      (tinfo[rndx][rndy+1] <= 0.65 && tinfo[rndx][rndy+1] >= 0.3) &&
      (tinfo[rndx+1][rndy+1] <= 0.65 && tinfo[rndx+1][rndy+1] >= 0.3) &&
      (tinfo[rndx+2][rndy+1] <= 0.65 && tinfo[rndx+2][rndy+1] >= 0.3) &&
      (tinfo[rndx+3][rndy+1] <= 0.65 && tinfo[rndx+3][rndy+1] >= 0.3) &&
      (tinfo[rndx-1][rndy+1] <= 0.65 && tinfo[rndx-1][rndy+1] >= 0.3) && //Second
      (tinfo[rndx][rndy-1] <= 0.65 && tinfo[rndx][rndy-1] >= 0.3) &&
      (tinfo[rndx+1][rndy-1] <= 0.65 && tinfo[rndx+1][rndy-1] >= 0.3) &&
      (tinfo[rndx+2][rndy-1] <= 0.65 && tinfo[rndx+2][rndy-1] >= 0.3)) {
      castle = new Castle(rndx, rndy, true);
      placing = false;
    }
  }

  placing = true;
  while (placing) {
    rndx = round(random(1, 94));
    rndy = round(random(4, 18));

    if ((tinfo[rndx][rndy] <= 0.65 && tinfo[rndx][rndy] >= 0.3) &&
      (tinfo[rndx+1][rndy] <= 0.65 && tinfo[rndx+1][rndy] >= 0.3) &&
      (tinfo[rndx+2][rndy] <= 0.65 && tinfo[rndx+2][rndy] >= 0.3) &&
      (tinfo[rndx+3][rndy] <= 0.65 && tinfo[rndx+3][rndy] >= 0.3) &&
      (tinfo[rndx-1][rndy] <= 0.65 && tinfo[rndx-1][rndy] >= 0.3) && // First
      (tinfo[rndx][rndy+1] <= 0.65 && tinfo[rndx][rndy+1] >= 0.3) &&
      (tinfo[rndx+1][rndy+1] <= 0.65 && tinfo[rndx+1][rndy+1] >= 0.3) &&
      (tinfo[rndx+2][rndy+1] <= 0.65 && tinfo[rndx+2][rndy+1] >= 0.3) &&
      (tinfo[rndx+3][rndy+1] <= 0.65 && tinfo[rndx+3][rndy+1] >= 0.3) &&
      (tinfo[rndx-1][rndy+1] <= 0.65 && tinfo[rndx-1][rndy+1] >= 0.3) && //Second
      (tinfo[rndx][rndy-1] <= 0.65 && tinfo[rndx][rndy-1] >= 0.3) &&
      (tinfo[rndx+1][rndy-1] <= 0.65 && tinfo[rndx+1][rndy-1] >= 0.3) &&
      (tinfo[rndx+2][rndy-1] <= 0.65 && tinfo[rndx+2][rndy-1] >= 0.3)) {
      enemyCastle.push(new Castle(rndx, rndy, false));
      placing = false;
    }
  }
  placing = true;
  while (placing) {
    rndx = round(random(1, 94));
    rndy = round(random(60, 72));

    if ((tinfo[rndx][rndy] <= 0.65 && tinfo[rndx][rndy] >= 0.3) &&
      (tinfo[rndx+1][rndy] <= 0.65 && tinfo[rndx+1][rndy] >= 0.3) &&
      (tinfo[rndx+2][rndy] <= 0.65 && tinfo[rndx+2][rndy] >= 0.3) &&
      (tinfo[rndx+3][rndy] <= 0.65 && tinfo[rndx+3][rndy] >= 0.3) &&
      (tinfo[rndx-1][rndy] <= 0.65 && tinfo[rndx-1][rndy] >= 0.3) && // First
      (tinfo[rndx][rndy+1] <= 0.65 && tinfo[rndx][rndy+1] >= 0.3) &&
      (tinfo[rndx+1][rndy+1] <= 0.65 && tinfo[rndx+1][rndy+1] >= 0.3) &&
      (tinfo[rndx+2][rndy+1] <= 0.65 && tinfo[rndx+2][rndy+1] >= 0.3) &&
      (tinfo[rndx+3][rndy+1] <= 0.65 && tinfo[rndx+3][rndy+1] >= 0.3) &&
      (tinfo[rndx-1][rndy+1] <= 0.65 && tinfo[rndx-1][rndy+1] >= 0.3) && //Second
      (tinfo[rndx][rndy-1] <= 0.65 && tinfo[rndx][rndy-1] >= 0.3) &&
      (tinfo[rndx+1][rndy-1] <= 0.65 && tinfo[rndx+1][rndy-1] >= 0.3) &&
      (tinfo[rndx+2][rndy-1] <= 0.65 && tinfo[rndx+2][rndy-1] >= 0.3)) {
      enemyCastle.push(new Castle(rndx, rndy, false));
      placing = false;
    }
  }
}
