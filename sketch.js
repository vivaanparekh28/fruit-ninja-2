var knife,knifeimage;
var fruit,fruit1,fruit2,fruit3,fruit4;
var fruitGroup,enemyGroup;
var score
var enemy,enemyimage;
var gameover,gameoverimage;
var gameState="play";


function preload(){
  knifeimage=loadImage( "sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  enemyimage=loadImage("alien1.png");
  gameoverimage=loadImage("gameover.png");
  
  
  
  
  
}
function setup(){
  createCanvas(600,600);
  knife=createSprite(300,300,20,20);
  knife.addImage("sword",knifeimage);
  knife.scale=0.5
  score=0
  knife.setCollider("circle",10,-20,40);
  gameover=createSprite(300,300,20,20);
  gameover.addImage("gameo",gameoverimage);
  gameover.visible=false;
  
  enemyGroup=new Group();
  fruitGroup=new Group();
  
}

function draw(){
  background("lightblue");
  if (gameState==="play"){
    knife.y=mouseY;
  knife.x=mouseX;
    
  
  spawnfruit();
    spawnenemies();
    
  text("score:"+score,300,20);
  knife.debug=false
  if (knife.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score=score+1 
    
    
    
  }
    if (knife.isTouching(enemyGroup)){
      gameState="end"
    }
    
  }
   if (gameState==="end"){
      enemyGroup.setVelocityXEach=0
      fruitGroup.setVelocityXEach=0
     gameover.visible=true;
      
    }
  
  
drawSprites();
}
function spawnfruit(){
  
   if (frameCount % 20===0 ){
     position=Math.round(random(1,2))
     fruit=createSprite(500,300,20,20);
     fruit.y=Math.round(random(100,500));
     if(position===1){
       fruit.x=500
       fruit.velocityX=-(7+(score/4))
     }
     if(position===2){
      fruit.x=0
      fruit.velocityX=(7+(score/4))
    }
     
     fruit.lifetime=200
     fruit.scale=0.25
     
     var rand=Math.round(random(1,4));
     switch(rand){
      case 1: fruit.addImage(fruit1);
           break;
    case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
      
      default: break;   
     }
     
    fruitGroup.add(fruit);
    
   }
}
function spawnenemies(){
  
  if (frameCount % 50===0){
   enemy=createSprite(500,300,20,20);
  enemy.addImage("emy",enemyimage);
  enemy.y=Math.round(random(100,500));
  enemy.velocityX=-(8+(score/4))
    enemyGroup.add(enemy);
  }
  
  
  
  
  
}

