//Objectos jugador y pelota
let ball,player1,player2
let backgroundColor = 0;
//Posiciones, dimensiones y velocidad del jugador
let padX = 100,pad2X=0, padY =0 , padW = 30, padH = 200, padSpeed = 25, pad2Speed = 5
//dimensiones de la pelota y velocidad
let ballD = 50, ballSpeedX =15, ballSpeedY = 10
//puntos
let  offset = 250,pointsY=100,pointsP1 = 0, pointsP2 = 0,txtSize = 40
//Opciones
let isPlayer = true, Player1Name = "Player1", player2Name = "Player2"
//Menu
let pvpColor = [11, 230, 44], pvcColor =255, activo = true,instrunctionsActive = true;
function setup(){
    createCanvas(windowWidth-5,windowHeight-5);
    pad2X = width-(padX+padW)
    padY = height/2 - padH/2
    ball = new Ball(width/2,height/2,ballD,ballSpeedX,ballSpeedY);
    player1 = new Pad(padX,padY,padW,padH,padSpeed,255,height,ball);
    player2 = new Pad(pad2X,padY,padW,padH,pad2Speed,255,height,ball);
}
function movePlayers(){
    if(keyIsPressed){
        if(keyCode === 87)
            player1.move(true)
        if(keyCode === 83)
            player1.move(false)
        if(isPlayer){
            if(keyCode === UP_ARROW)
            player2.move(true)
            if(keyCode === DOWN_ARROW)
            player2.move(false)
        }
    }
}

function keyPressed(){
    console.log(keyCode)
    if(activo){
        if(keyCode == UP_ARROW){
            isPlayer = true;
            pvpColor = [11, 230, 44]
            pvcColor = 255;
        }
        if(keyCode == DOWN_ARROW){
            isPlayer = false;
            pvcColor = [11, 230, 44]
            pvpColor = 255;
        }
        if(keyCode === 13)
            activo = false;
    }else{
        if(keyCode === 13)
            instrunctionsActive = false;
    }
}
function menu(){
    fill(255)
    push()
        textAlign(CENTER)
        textSize(150)
        text("P O N G",width/2,330)
        textSize(20)
        text("Utilice ⇅ para seleccionar el modo de juego",width/2,(height/2)-80)
        fill(pvpColor)
        textSize(72)
        text("Player vs Player",width/2,(height/2))
        fill(pvcColor)
        text("Player vs Computadora",width/2,(height/2)+80)
        fill(255)
        textSize(22)
        text("Presione ENTER para empezar",width/2,(height/2)+122)
        textSize(12)
        text("Programador: Rubén J. Sandoval",width-100,height-12)
    pop()
}
function instructions(){
    let offsetText = 300;
    push()
        textAlign(CENTER)
        fill(255)
        textSize(30)
        text("Instrucciones",width/2,(height/2)-100)
        textSize(35)
        text("Player1",(width/2)-offsetText,(height/2))
        text("Utilice W para moverse hacia arriba",(width/2)-offsetText,(height/2)+30)
        text("Utilice S para moverse hacia abajo",(width/2)-offsetText,(height/2)+70)
        text("Player 2",(width/2)+offsetText,(height/2))
        text("Utilice ↑ para moverse hacia arriba",(width/2)+offsetText,(height/2)+30)
        text("Utilice ↓ para moverse hacia abajo",(width/2)+offsetText,(height/2)+70)
        textSize(30)
        text("Presione ENTER para empezar",width/2,(height/2)+150)
    pop()
}

function computerPlays(){
    if(ball.speedX > 0)
        if(player2.y > ball.y)
            player2.move(true)
        else
            player2.move(false)
}

function score(){
    fill(255)
    textSize(textSize)
    push()
    strokeWeight(0)
    text(Player1Name,padX + offset-50,pointsY - 50);
    text(player2Name,pad2X - offset-50,pointsY - 50);
    pop()
    textSize(txtSize)
    text(pointsP1,padX + offset,pointsY);
    text(pointsP2,pad2X - offset,pointsY);
}
function points(winner){
    if(winner === 1){
       pointsP1++
       backgroundColor = 100;
       if(!isPlayer)
        addComputerSpeed()
    }
    else if(winner === 2){   
        pointsP2++
        backgroundColor = 100;
        if(!isPlayer)
            addComputerSpeed()
    }
}
function addComputerSpeed(){
    if(player2.speed < 15)
        player2.speed+=0.5;
}
function play(){
    score()
    noFill()
    line(width/2,0,width/2,height)
    ball.display()
    points(ball.move())
    player1.display()
    player2.display()
    movePlayers()
    if(!isPlayer)
        computerPlays()
    else
        player2.speed = player1.speed;
}
function draw(){
    background(backgroundColor)
    backgroundColor = 0;
    strokeWeight(3)
    if(activo)
        menu();
    else
        if(instrunctionsActive)
            instructions()
        else
            play()

}
