var sword,swordImg
var PLAY=1
var END=0
var gameState=PLAY
var score=0

function preload(){ 
  swordImg= loadImage("sword.png")
 fruit1= loadImage("fruit1.png")
 fruit2= loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4 = loadImage("fruit4.png")
  enemyImg= loadAnimation("alien1.png","alien2.png")
  gameOverImage=loadImage("gameover.png")
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3")
  gameOverSound=loadSound("gameover.mp3")
  


  
  
  
  
}
function setup(){
  createCanvas(400,400)
  sword= createSprite(40,200,40,40)
  sword.addImage(swordImg)
  sword.scale=0.5
  
  fruitGroup= createGroup()
  enemyGroup= new Group()
              
}

function draw(){
    if(sword.isTouching(fruitGroup)){
  fruitGroup.destroyEach()
  score=score+2
}

  background("skyblue")
  text("Score "+ score,150,30)
   drawSprites();
 if(gameState===PLAY){
  sword.x=mouseX
  sword.y=mouseY
fruit();
    enemy(); 
    if(sword.isTouching(fruitGroup)){
      knifeSwooshSound.play();
  fruitGroup.destroyEach()
  

  score=score+2
}
   if(sword.isTouching(enemyGroup))
  gameState=END
}
  if(gameState===END){
    enemyGroup.destroyEach()
    gameOverSound.play();
    
    sword.addImage(gameOverImage)
    sword.scale=0.8
    sword.x=200;
    sword.y=200;
    
    
  }
  
  
  
}






  function fruit(){
    if(frameCount%40===0){
      fruits= createSprite(400,random(10,400),20,20)
      randside=Math.round(random(1,2))
      switch (randside){
        case 1: fruits.x=400;
          fruits.velocityX=-(7+(score/4)) 
          break;
        case 2: fruits.x=0
          fruits.velocityX=(7+(score/4))
      }
      
       fruits.lifetime=150
      rand=Math.round(random(1,4))
      switch(rand){
          case 1: fruits.addImage(fruit1);break;
          case 2: fruits.addImage(fruit2);break;
          case 3: fruits.addImage(fruit3);break;
          case 4: fruits.addImage(fruit4);break;
        }
      fruits.scale=0.2
      fruitGroup.add(fruits)
    }
  
  }


   function enemy(){
      if(frameCount%90===0){
      enemies=createSprite(400,random(10,400),20,20)
      enemies.velocityX=(-7+score/10)
      enemies.lifetime=150
      enemies.addAnimation("alien",enemyImg)
      enemies.scale=1
        enemyGroup.add(enemies)
    }
   }

   
  
   
  
  