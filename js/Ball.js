class Ball{
    constructor (x,y,d,speedX,speedY){
        this.initalPos = [x,y]
        this.x = x
        this.y = y
        this.d = d
        this.c = 255
        this.speedX = speedX * this.direction()
        this.speedY = speedY
    }
    display(){
        stroke(this.c)
        circle(this.x,this.y,this.d)
    }
    reset(){
        this.x = this.initalPos[0]
        this.y = this.initalPos[1]
        this.speedX*=this.direction()
    }
    direction(){
        return (Math.floor(Math.random() * 2) == 1)?1:-1
    }
    move(){
        let collision = this.collide()
        this.x+=this.speedX
        this.y+=this.speedY
        return collision
    }
    collide(){
        if(this.y > windowHeight- this.d/2 || this.y + this.d/2 < this.d)
            this.speedY =-this.speedY
        //Derecha
        if(this.x > windowWidth-(this.d/2)){
            this.speedX =-this.speedX;
            this.reset()
            return 1
        }
        //Izquierda
        if(this.x + this.d/2 < this.d){
            this.speedX =-this.speedX
            this.reset()
            return 2;
        }
        return 0;
    }
}