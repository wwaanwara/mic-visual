let microphone;
var particles = []

 function setup(){
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  microphone = new p5.AudioIn();
  microphone.start();
}
function draw(){
    background(0);
    text('tap to start', width/2, 30);
    let micLevel = microphone.getLevel();
    let mic = (micLevel * 2000) + 2
    text(micLevel, width/8, 30)

    translate(width/2,height/2)
    var p =new Particle()
    particles.push(p)

    for (var i = particles.length - 1; i >=0; i--){
        if (!particles[i].edges()){
        particles[i].update(mic > 0.00001)
        particles[i].show()
        } else {
            particles.splice(i,1)
        }
    }  
  }
