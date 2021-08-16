var skyImg,sky;
var rocketImg,rocket;
var starImg,star,starGroup;
var meteorImg,meteor,meteorGroup;
var play;

function preload(){
skyImg=loadImage("OIP.jpg");
rocketImg=loadImage("rocket.png");
starImg=loadImage("star.jpg");
meteorImg=loadImage("R.png");
}

function setup() {
 createCanvas(600,600);
 sky = createSprite(300,300);
 sky.addImage("sky",skytImg);
 sky.velocityX=1
 
 starGroup=new Group();
 meteorGroup=new Group();

 rocket = createSprite(300,300);
 rocket.addImage("rocket",rocketImg);
 rocket.y=mouse.y;

}

function draw() {
  background(0);
  
  if (gameState === "play") {
    if (keyDown("up_arrow"))
    { ghost.y = ghost.y - 3; } 

    if(keyDown("down_arrow"))
     { ghost.y = ghost.y + 3; }

     if(sky.y > 400){ sky.y = 300 } 
     
     spawnStuff();

     if (meteorGroup.isTouching(rocket)){
       rocket.destroy();
       gameState="end";
     }
     drawSprites();

     if (gameState==="end"){
      stroke("black"); fill("red"); 
      textSize(30); text("Game Over", 230,250) }
     }
     
  }
  function spawnStuff(){
    
    if (frameCount % 240 === 0)
    { var star = createSprite(200, -50); 
      var meteor = createSprite(200,10);
    
       star.x = Math.round(random(120,400));
       meteor.x = Math.round(random(120,400));

         star.addImage(starImg);
         meteor.addImage(meteorImg);

          star.velocityX = 1;
          meteor.velocityX = 1;  

          ghost.depth = door.depth; 
          ghost.depth +=1;

            star.lifetime = 800;
            meteor.lifetime = 800;

              starGroup.add(star);
               meteorGroup.add(meteor); } 
  }

