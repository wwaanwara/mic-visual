class Particle {
    constructor(mic) {
        this.pos = p5.Vector.random2D().mult(0.5)
        this.vel = createVector(0,0)
        this.offset = mic
        this.acc = this.pos.copy().mult(random(0.002,0.002))
        this.colors = [color('#25194C'), color('#FFC743'), color('#FA7500'), color('#FF4FA6'), color('#F7F2D6'), color('#F7BAD1')];
        this.w = random(3,5)
    }

    update(cond){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        if (cond) {
            this.pos.add(this.vel)
        }
    }
    edges() {
        if (this.pos.x < -width || this.pos.x > width ||this.pos.y < -height || this.pos.y > height  ){
            return true
        }else {
            return false
        }
    }
    show() {
        noStroke()
        fill(random(this.colors))
        ellipse(this.pos.x,this.pos.y,this.w)
    }
}