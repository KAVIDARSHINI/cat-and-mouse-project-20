var garden,gardenImg;
var cat,cat_sleep,cat_run,cat_sit;
var rat,rat_gift,rat_kid,rat_glass;

function preload() {
    //load the images here

    gardenImg = loadImage("garden.png");
    cat_sleep = loadImage("tom.png");
    rat_gift = loadImage("jerry.png");
    cat_run = loadAnimation("c1.png","c2.png");
    rat_kid = loadAnimation("r1.png","r2.png");
    cat_sit = loadAnimation("sit.png");
    rat_glass = loadAnimation("glass.png");
}

function setup(){
    createCanvas(900,580);
    //create tom and jerry sprites here
   
   garden = createSprite(450,300);
   garden.addImage("forest",gardenImg);
   garden.scale = 1;

   cat = createSprite(790,490,20,30);
   cat.addImage("tom",cat_sleep);
   cat.scale = 0.1;

   rat = createSprite(50,500,30,40);
   rat.addImage("jerry",rat_gift);
   rat.scale = 0.1;


   cat.debug = false;
   rat.debug = false;
}

function draw() {

    background("yellow");
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - rat.x < cat.width / 2 - rat.width / 2) {
        cat.addAnimation("catLastImg",cat_sit);
        cat.changeAnimation("catLastImg");
        cat.velocityX = 0; 
         
        cat.x = 100;

        rat.addAnimation("ratLastImg",rat_glass);
        rat.changeAnimation("ratLastImg"); 
        
    } 
       
    drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === LEFT_ARROW) {
      cat.velocityX = -5;
      cat.addAnimation("catRunning",cat_run);
      cat.changeAnimation("catRunning");

      rat.addAnimation("ratRunning",rat_kid);
      rat.changeAnimation("ratRunning");
  }

}
