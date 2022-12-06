let mic;

 function setup(){
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(0);
  fill(random(0,255),random(0,255),random(0,255));
  noStroke()
  text('tap to start', width/2, 20);
  rectMode(CENTER)
  rotate(random(0,TWO_PI))
  let micLevel = mic.getLevel();
  console.log(micLevel)
  let micl = (micLevel * 1500) + 2
  ellipse(random(0,width), random(0,height), micl);
  rect(random(0,width), random(0,height), micl);

  
}

