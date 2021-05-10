class Pad{
    constructor(x,y,w,h,speed,color,screenH,ball){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.speed = speed
        this.color = color;
        this.screenH = screenH
        this.ball = ball
    }
    display(){
        stroke(this.color)
        rect(this.x,this.y,this.w,this.h)
        this.collide()
    }
    collide(){
      if(this.ball.x < this.x + this.w && this.ball.x + this.ball.d/2 > this.x &&
             this.ball.y < this.y + this.h && this.ball.y + this.ball.d/2 > this.y)
                this.ball.speedX = -this.ball.speedX;
            
    }
    move(up){
        if(up){
            if(this.y >= 0)
                this.y-=this.speed;
        }
        else
            if(this.y + this.h < this.screenH)
                this.y+=this.speed
    }

}