var fundo
var gato, gato1, gato2, gato3
var rato, rato1, rato2, rato3
function preload() {
    //load the images here
    fundo = loadImage("images/garden.png")
    gato1 = loadAnimation("images/cat1.png")
    gato2 = loadAnimation("images/cat2.png", "images/cat3.png")
    gato3 = loadAnimation("images/cat4.png")
    rato1 = loadAnimation("images/mouse1.png")
    rato2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
    rato3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    gato = createSprite(870, 600)
    gato.addAnimation("gatoDormindo", gato1)
    gato.scale = 0.2
    rato = createSprite(200, 600)
    rato.addAnimation("ratoParado", rato1)
    rato.scale = 0.15
}

function draw() {

    background(fundo);
    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX = 0
    gato.addAnimation("últimaImagem", gato3)
    gato.x = 300
    gato.scale = 0.2
    gato.changeAnimation("últimaImagem")
    rato.addAnimation("ratoÚltimaImagem", rato3)
    rato.scale = 0.15
    rato.changeAnimation("ratoÚltimaImagem")
    }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    gato.velocityX = -5
    gato.addAnimation("gatoCorrendo", gato2)
    gato.changeAnimation("gatoCorrendo")
    rato.addAnimation("ratoCorrendo", rato2)
    rato.frameDelay = 25
    rato.changeAnimation("ratoCorrendo")

}
  


}
