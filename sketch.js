var zombie,zombieImg, zombie2, zombie3;
var player,playerShooting, playerImg;
var heart1,heart2,heart3;
var heart1Img,heart2Img,heart3Img;
var backgroundImg;

function setup(){

    player = createSprite (50,350,10,10);
    player.addImage(playerImg);
    player.scale = 0.2;

    zombie = createSprite(350,200,10,10); 
    zombie.addImage(zombieImg)
    zombie.scale=0.1;
    zombie.y=Math.round(random(100,300));

    zombie2 = createSprite(350,200,10,10); 
    zombie2.addImage(zombieImg)
    zombie2.scale=0.1;
    zombie2.y=Math.round(random(100,300));

    zombie3 = createSprite(350,200,10,10); 
    zombie3.addImage(zombieImg)
    zombie3.scale=0.1;
    zombie3.y=Math.round(random(100,300));

    zombie.velocityX=-1;
    zombie2.velocityX=-1;
    zombie3.velocityX=-1;

        bullet = createSprite(50,100, 5,5 );
        bullet.velocityX = 70;

}

function preload(){
backgroundImg = loadImage("bg.jpeg");
zombieImg = loadImage("zombie.png");

playerImg = loadImage("shooter_1.png")
}

function draw(){
    createCanvas(400,400);
    background(backgroundImg);
    
    if(keyDown("UP_ARROW")){
        player.velocityY = -3;
    }

    if(keyDown("DOWN_ARROW")){
        player.velocityY = 3;
    }

    if(player.isTouching(zombie) || player.isTouching(zombie2) || player.isTouching(zombie3)){
        textSize(20);
        fill("gold")
        text("GAME OVER, Better luck next time", 50,350);

        player.velocityY = 0;
        zombie.velocityX = 0;
        zombie2.velocityX = 0;
        zombie3.velocityX = 0;
    }

    if(zombie2.position.x < -50){
        textSize(20);
        fill("gold");
        text("You Won!", 50,350);
        player.velocityY = 0;
        zombie.velocityX = 0;
        zombie2.velocityX = 0;
        zombie3.velocityX = 0;

        playSound("win.mp3");
    }


    drawSprites();
}