let angle = 0;
var rectWidth = 21;
var gap = 8;
let ma;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function draw() {
  background(175);
  ortho(-300, 350, -300, 400, 0, 800);
  
  rotateX(-QUARTER_PI);
  rotateY(1.5*ma);
  
  // translate(width / 2, height / 2);
  rectMode(CENTER);

  
  let offset = 0;
  for (let z = 0; z < height; z += rectWidth) {
    for (let x=0; x < width; x += rectWidth) {
      push();
      let d = dist(x, z, width/2, height/2);
      let offset = map(d, 0, maxD, PI, -PI);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 80, 300);
      
      translate(x-width/2+rectWidth, 0, z-height/2);
      normalMaterial();
    
      translate(rectWidth*2, 0, 0);
      box(rectWidth-gap, h, rectWidth-gap);
    
      pop();
    }
    // offset += 0.1;
  }
  
  angle += 0.04;
}

