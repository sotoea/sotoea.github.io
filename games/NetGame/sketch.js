var socket;
var clients = [];
var projectiles = [];

// Player and Movement
var x, y, diameter, upKey, downKey, rightKey, leftKey, pColor, speedX, speedY, speedLimit;
var speedTimer = 0;
var bulletTimer = 0;
var health = 100;
// Cannon
var cannonX, cannonY;

var ground;

var blueSkin, redSkin, yellowSkin;
var started = false;

function preload() {
    ground = loadImage("img/background.png");
    blueSkin = loadImage("img/blue.png");
    redSkin = loadImage("img/red.png");
    yellowSkin = loadImage("img/yellow.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //socket = io.connect('http://localhost:3000');
    socket = io.connect('https://sotocodes-netgame.herokuapp.com/');
    // socket.on('move', movePlayer);
    // socket.on('mouseClick', mouseCl)
    socket.on('updateClients', updateClients);
    socket.on('updateOthers', updateOthers);
    socket.on('updateCannon', updateCannon);
    socket.on('newProjectile', newProjectile);

    frameRate(60);
    x = random(100, width - 100);
    y = random(100, height - 100);
    upKey = false;
    downKey = false;
    leftKey = false;
    rightKey = false;
    speedX = 0;
    speedY = 0;
    speedLimit = 5;
    diameter = 28;
    skin = -1;
    pColor = color(Math.floor(random(100, 255)), Math.floor(random(100, 255)), Math.floor(random(100, 255)));
}

function restartPlayer() {
    x = random(50, 800);
    y = random(50, 600);
    upKey = false;
    downKey = false;
    leftKey = false;
    rightKey = false;
    speedX = 0;
    speedY = 0;
    speedLimit = 5;
    diameter = 25;
    health = 100;
}



function draw() {
    if (bulletTimer > 0) bulletTimer--;
    background(0);

    textSize(20);
    fill(200);
    stroke(200);

    push();
    translate(-x, -y);

    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            image(ground, (i * 200), j * 200);
        }
    }
    stroke(100, 50, 50);
    fill(100, 50, 50);
    rect(-20, -20, 3020, 40, 5);
    rect(-20, 2980, 3020, 40, 5);
    rect(2980, -20, 40, 3040, 5);
    rect(-20, -20, 40, 3020, 5);
    var c = clients.map(function (e) { return e.id; }).indexOf(socket.id);
    stroke(50);
    // Draw Clients
    for (var i = 0; i < clients.length; i++) {
        if (c != i && clients[i].h > 0) {
            fill(clients[i].r, clients[i].g, clients[i].b);
            ellipse(clients[i].x + width / 2, clients[i].y + height / 2, clients[i].d, clients[i].d);
            imageMode(CENTER);
            if (clients[i].skin == 0)
                image(blueSkin, clients[i].x + width / 2, clients[i].y + height / 2);
            if (clients[i].skin == 1)
                image(redSkin, clients[i].x + width / 2, clients[i].y + height / 2);
            if (clients[i].skin == 2)
                image(yellowSkin, clients[i].x + width / 2, clients[i].y + height / 2);

            fill(255, 0, 0);
            ellipse(clients[i].cannonX + clients[i].x + width / 2, clients[i].cannonY + clients[i].y + height / 2, 5, 5);
        }
    }
    stroke(0, 0, 255);

    handleBullets(); // Update, draw, and check collisions of bullets
    pop();

    strokeWeight(1);
    noStroke();
    fill(255);
    text("Number Of Players: " + clients.length, 10, 20);

    if (!started) {
        fill(50, 50, 150, 100);
        rect(width / 2 - 125, height / 2 - 100, 225, 150);
        noStroke();
        fill(255);
        textAlign(CENTER);
        text("Click to select your skin.", width / 2, height / 2 - 50);
        image(blueSkin, width / 2 - 75, height / 2);
        image(redSkin, width / 2, height / 2);
        image(yellowSkin, width / 2 + 75, height / 2);
        return;
    }

    text("Health: " + health, 10, 40);

    strokeWeight(2.5);
    if (speedTimer > 0) {
        stroke(255, 255, 0, 150);
        speedTimer--;
    } else if (speedTimer > -60) {
        stroke(255, 0, 0, 150);
        speedTimer--;
        speedLimit = 5;
        diameter = 25;
    } else {
        stroke(0, 255, 0, 150);
    }
    // Draw Player
    fill(pColor);
    if (health > -20)
        move();
    if (health > 0) {

        ellipse(width / 2, height / 2, diameter, diameter);
        imageMode(CENTER);
        if (skin == 0)
            image(blueSkin, width / 2, height / 2);
        if (skin == 1)
            image(redSkin, width / 2, height / 2);
        if (skin == 2)
            image(yellowSkin, width / 2, height / 2);

        calculateCannon();
        strokeWeight(1);
        fill(255, 0, 0);
        stroke(200, 200, 200);
        ellipse(cannonX + width / 2, cannonY + height / 2, 5, 5);
    } else {
        noStroke();
        fill(255);
        text("You Died\nPress ' r ' to start again.", width / 2 - 100, height / 2);
        diameter = 0;
    }
}

function handleBullets() {
    if (projectiles.length > 0) {
        for (var i = projectiles.length - 1; i >= 0; i--) {
            projectiles[i].x += projectiles[i].dx;
            projectiles[i].y += projectiles[i].dy;
            projectiles[i].life -= 0.04;

            fill(255, 0, 0);
            ellipse(projectiles[i].x + width / 2, projectiles[i].y + height / 2, 6, 6);

            if (projectiles[i].x < -width / 2 || projectiles[i].x > 3000 - width / 2 || projectiles[i].y < -height / 2 || projectiles[i].y > 3000 - height / 2) {
                projectiles.splice(i, 1);
                break;
            }

            if (projectiles[i].owner != socket.id && dist(projectiles[i].x, projectiles[i].y, x, y) < diameter / 2) {
                console.log("I got hit");
                health -= 10;
                projectiles.splice(i, 1);
                return;
            }

            //check other clients collisions
            var c = clients.map(function (e) { return e.id; }).indexOf(socket.id);
            // Draw Clients
            for (var j = 0; j < clients.length; j++) {
                if (c != j && (dist(projectiles[i].x, projectiles[i].y, clients[j].x, clients[j].y) < diameter / 2)) {
                    projectiles.splice(i, 1);
                    console.log("I hit: " + clients[j].id);
                    return;
                }
            }

            if (projectiles[i].life < 0) projectiles.splice(i, 1);
        }
    }
}

function calculateCannon() {
    let tmpX = mouseX - width / 2;
    let tmpY = mouseY - height / 2;
    var toggleUp = false;
    if (tmpY < 0) {
        tmpY *= -1;
        toggleUp = true;
    }
    let angle = atan(tmpX / tmpY);
    cannonX = diameter / 2 * sin(angle);
    cannonY = diameter / 2 * cos(angle);
    if (toggleUp) {
        cannonY *= -1;
    }

    var data = {
        id: socket.id,
        cX: cannonX,
        cY: cannonY
    }
    socket.emit('syncCannon', data);
}

function move() {
    if (upKey && y > 20 + diameter / 2 - height / 2) {
        if (leftKey || rightKey) {
            if (speedY >= -speedLimit + 0.70711) {
                speedY -= 0.25;
            } else if (speedY != -speedLimit + 0.70711) {
                speedY = -speedLimit + 0.70711;
            }
        }
        else {
            if (speedY >= -speedLimit) {
                speedY -= 0.25;
            } else if (speedY != -speedLimit) {
                speedY = -speedLimit;
            }
        }
    }
    if (downKey && y < 2980 - diameter / 2 - height / 2) {
        if (leftKey || rightKey) {
            if (speedY <= speedLimit - 0.70711) {
                speedY += 0.25;
            } else if (speedY != speedLimit - 0.70711) {
                speedY = speedLimit - 0.70711;
            }
        }
        else {
            if (speedY <= speedLimit) {
                speedY += 0.25;
            } else if (speedY != speedLimit) {
                speedY = speedLimit;
            }
        }
    }
    if (leftKey && x > 20 + diameter / 2 - width / 2) {
        if (upKey || downKey) {
            if (speedX >= -speedLimit + 0.70711) {
                speedX -= 0.25;
            } else if (speedX != -speedLimit + 0.70711) {
                speedX = -speedLimit + 0.70711;
            }
        }
        else {
            if (speedX >= -speedLimit) {
                speedX -= 0.25;
            } else if (speedX != -speedLimit) {
                speedX = -speedLimit;
            }
        }
    }
    if (rightKey && x < 2980 - diameter / 2 - width / 2) {
        if (upKey || downKey) {
            if (speedX <= speedLimit - 0.70711) {
                speedX += 0.25;
            } else if (speedX != speedLimit - 0.70711) {
                speedX = speedLimit - 0.70711;
            }
        }
        else {
            if (speedX <= speedLimit) {
                speedX += 0.25;
            } else if (speedX != speedLimit) {
                speedX = speedLimit;
            }
        }
    }
    if (!rightKey && !leftKey) {
        if (speedX > 0.25) speedX -= 0.2;
        else if (speedX < -0.25) speedX += 0.2;
        else speedX = 0;
    }
    if (!upKey && !downKey) {
        if (speedY > 0.25) speedY -= 0.2;
        else if (speedY < -0.25) speedY += 0.2;
        else speedY = 0;
    }

    if (x <= 20 + diameter / 2 - width / 2 || x >= 2980 - diameter / 2 - width / 2) speedX = -speedX;
    if (y <= 20 + diameter / 2 - height / 2 || y >= 2980 - diameter / 2 - height / 2) speedY = -speedY;

    x += speedX;
    y += speedY;

    var data = {
        xPos: x,
        yPos: y,
        r: red(pColor),
        g: green(pColor),
        b: blue(pColor),
        d: diameter,
        id: socket.id,
        h: health
    }
    socket.emit('movePlayer', data);

}

function keyPressed() {
    if (key == 'w' || key == 'W') {
        upKey = true;
    }
    if (key == 's' || key == 'S') {
        downKey = true;
    }
    if (key == 'a' || key == 'A') {
        leftKey = true;
    }
    if (key == 'd' || key == 'D') {
        rightKey = true;
    }
    if (key == ' ' && speedTimer <= -60) {
        speedTimer = 30;
        speedLimit = 10;
        diameter = 23;
    }
    if (health <= 0 && key == 'r') {
        restartPlayer();
    }
}

function keyReleased() {
    if (key == 'w' || key == 'W') {
        upKey = false;
    }
    if (key == 's' || key == 'S') {
        downKey = false;
    }
    if (key == 'a' || key == 'A') {
        leftKey = false;
    }
    if (key == 'd' || key == 'D') {
        rightKey = false;
    }
}

// Resize window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Update Client IDs
function updateClients(data) {
    clients = data;
}

function updateOthers(data) {
    var i = clients.map(function (e) { return e.id; }).indexOf(data.id);
    if (!clients[i]) return;
    clients[i].x = data.xPos;
    clients[i].y = data.yPos;
    clients[i].r = data.r;
    clients[i].g = data.g;
    clients[i].b = data.b;
    clients[i].d = data.d;
    clients[i].h = data.h;
}

function updateCannon(data) {
    if (!started) return;
    var i = clients.map(function (e) { return e.id; }).indexOf(data.id);
    if (!clients[i]) return;
    clients[i].cannonX = data.cX;
    clients[i].cannonY = data.cY;
}

// // Old mouse Clicked to send
function mouseClicked() {
    if (!started) {
        width / 2 - 75, height / 2
        if (mouseX > width / 2 - 100 && mouseX < width / 2 - 50) skin = 0;
        if (mouseX > width / 2 - 25 && mouseX < width / 2 + 25) skin = 1;
        if (mouseX > width / 2 + 50 && mouseX < width / 2 + 100) skin = 2;

        if (skin >= 0) {
            started = true;
            var data = {
                xPos: x,
                yPos: y,
                r: red(pColor),
                g: green(pColor),
                b: blue(pColor),
                d: diameter,
                skinSelection: skin,
                id: socket.id,
                h: health
            }
            socket.emit('playerBegin', data);
        }
        return;
    }
    if (bulletTimer <= 0 && health > 0) {
        bulletTimer = 5;
        vec = createVectorDirection(mouseX, mouseY, width / 2, height / 2);
        vec.normalize();
        var p = new Projectile(x + cannonX, y + cannonY, vec.x * 10, vec.y * 10, 0);

        socket.emit('newProjectile', p);

    }
}

function newProjectile(data) {
    projectiles.push(data);
}
function createVectorDirection(mx, my, cx, cy) {
    return createVector((mx - cx), (my - cy));
}
class Projectile {
    constructor(px, py, pdx, pdy, type) {
        this.x = px;
        this.y = py;
        this.dx = pdx;
        this.dy = pdy;
        this.type = type;
        this.life = 10;
        this.owner = socket.id;
    }
}

// // Old move player function
// function movePlayer(data) {
//     fill(0, 255, 0);
//     ellipse(data.x, data.y, 25, 25);
// }

// // Old mouse clicked function
// function mouseCl(data) {
//     fill(255, 0, 0);
//     ellipse(data.x, data.y, 50, 50);
// }

// // Old mouse Dragged to send
// function mouseDragged() {
//     var data = {
//         x: mouseX,
//         y: mouseY
//     }

//     socket.emit('move', data);
// }

