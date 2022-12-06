let x,y ;
let speed = 0;
let dia = 5
let gravity = 0.7
let bounciness = 0.6
let microphone
let particlesRight = []

 function setup(){
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  microphone = new p5.AudioIn();
  microphone.start();
  x = width/2
  y = dia/2
}
function draw(){
    background(0);
    let micLevel = microphone.getLevel();
    let mic = (micLevel * 300) + 2
    text(micLevel, width/8, 30)

    speed -= gravity
    y -= speed + mic

    if (y + dia/2 > height ) {
        y = height - dia/2
        speed *= -bounciness
    }
    
    var pr =new ParticleRight(x,y,50)
    particlesRight.push(pr)
    for(let j = 0; j < particlesRight.length; j = j +1){
        particlesRight[j].show()
        particlesRight[j].move()
        if(particlesRight[j].alpha <= 0){
        particlesRight.splice(j,1)
        }
      } 

      fill(255);
      noStroke()  
      ellipse(x,y,50)  
    
}

function mousePressed() {
    userStartAudio()
    setup()
}

class ParticleRight{
    constructor(positionX,positionY,mic){
      this.x = positionX
      this.y = positionY
      this.offset = mic
      this.alpha = 150
    }
    
    show(){ 
      
      fill(255,255,255,this.alpha)
      circle(this.x,this.y,random(20,30))
      
      }
      
    move(){ 
      
     this.x = this.x - random(-5,5)
     this.y = this.y - random(-2,2) + random(-3,this.offset)
     this.alpha = this.alpha - 5
    
    }
    
   }