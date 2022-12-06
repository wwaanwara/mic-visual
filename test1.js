let microphone;
let angle = 0
var particlesRight = []
var particlesLeft = []

 function setup(){
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  microphone = new p5.AudioIn();
  microphone.start();
}
function draw(){
    background(0);
    fill(255);
    noStroke()
    text('tap to start', width/2, 30);
    
    let micLevel = microphone.getLevel();
    let mic = (micLevel * 100) + 2
    text(micLevel, width/8, 30)
    
    push()
    translate(width/2,height/2)
    var pr =new ParticleRight(0,0,mic)
    particlesRight.push(pr)
    rotate(angle)
    for(let j = 0; j < particlesRight.length; j = j +1){
        particlesRight[j].show()
        particlesRight[j].move()
        if(particlesRight[j].alpha <= 0){
        particlesRight.splice(j,1)
        }
      } 
    pop()
    angle -= radians(1)
    push()
      translate(width/2,height/2)
      var pl =new ParticleLeft(0,0,mic)
      particlesLeft.push(pl)
      rotate(angle)
      for(let m = 0; m < particlesLeft.length; m = m +1){
          particlesLeft[m].show()
          particlesLeft[m].move()
          if(particlesLeft[m].alpha <= 0){
          particlesLeft.splice(m,1)
          }
        } 
    pop()      
  }
  class ParticleRight{
    constructor(positionX,positionY,mic){
      this.x = positionX
      this.y = positionY
      this.offset = mic
      this.alpha = 150
    }
    
    show(){ 
      
      fill(0,200,0,this.alpha)
      circle(this.x,this.y,random(100,150))
      
      }
      
    move(){ 
      
     this.x = this.x + random(-2,2) + random(-3,this.offset)
     this.y = this.y - random(-2,2) - random(-3,this.offset)
     this.alpha = this.alpha - 5
    
    }
    
   } 
   
   class ParticleLeft{
    constructor(positionX,positionY,mic){
      this.x = positionX
      this.y = positionY
      this.offset = mic
      this.alpha = 150
    }
    
    show(){ 
      
      fill(200,0,0,this.alpha)
      circle(this.x,this.y,random(70,12))
      
      }
      
    move(){ 
      
     this.x = this.x - random(-3,3) - random(-3,this.offset)
     this.y = this.y + random(0,10) + random(4,this.offset)
     this.alpha = this.alpha - 5
    
    }
    
   } 