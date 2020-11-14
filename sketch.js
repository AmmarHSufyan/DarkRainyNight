let img;
let raindDrops = [];
let thunderFlag = false;
let millisecond;
let seconds;
let changeRain = false;
let rainChance = 0;

function preload() {
  img = loadImage("lamp.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  createRain();
  millisecond = millis();
  seconds = second();
}

function draw() {



  if (int(millisecond - millis()) % 20 == 0)
    thunderFlag = true

  let thunder = int(random(2));
  if (thunderFlag) {


    if (thunder == 1) {
      background(150);
      rainChance++;
    }
    else if (thunder == 0)
      background(50);
    thunderFlag = false

    if (rainChance > 10) {
      changeRainDirection();
      rainChance = 0;
    }
  }
  else
    background(50);


  fill(40)
  rect(80, 400, 200, 400)
  rect(310, 200, 180, 600)

  rect(500, 350, 200, 450)
  rect(810, 300, 280, 500)

  noStroke();

  fill(250, 250, 250, random(30, 70))
  ellipse(750, 150, 100);


  fill(250, 250, 250, 100)
  ellipse(750, 150, 70);

  fill(255, 255, 0, random(50, 70))
  beginShape();
  vertex(480, 420);
  vertex(350, 650);
  vertex(750, 450);
  vertex(510, 405);
  endShape(CLOSE);



  image(img, 200, 400);


  updateRain();
}


function createRain() {



  for (let i = 0; i < 50; i++) {

    raindDrops.push(new RainDrop(random(400, 700), random(430, 650), 1, 7));

  }
}


function updateRain() {



  for (let i = 0; i < raindDrops.length; i++) {
    raindDrops[i].update();
    raindDrops[i].draw();

  }
}

function changeRainDirection() {

  let r = random(-2, 2)
  let s = random(3, 7)

  for (let i = 0; i < raindDrops.length; i++) {
    raindDrops[i].d = r;
    raindDrops[i].s = s;

  }
}

class RainDrop {
  x = 0;
  xo = 0;
  y = 0;
  d = 0;
  s = 0;
  length = 0;




  constructor(x, y, d, s) {

    this.length = random(30, 70);
    this.xo = this.x = x;
    this.y = y;
    this.d = d;
    this.s = s;


  }

  update() {

    this.x += this.d;
    this.y += this.s;


  }

  draw() {

    if (this.y >= 750) {
      this.x = this.xo
      this.y = random(450, 480);

    }

    fill(255, 255, 0, random(240, 255));
    rect(this.x, this.y, random(0, 2), this.length);

  }


}