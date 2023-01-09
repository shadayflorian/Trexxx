
var trex ,trex_running;
var ground, invisibleGround, groundImage;
var cloudImg;
var obstacle, obstacle1, obstacle2, obstacle3;
var obstacle4, obstacle5, obstacle6;
var rand;

function preload(){
  //cargar animaciones
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

  //agregar la imagen del suelo
  groundImage = loadImage("ground2.png")

  //agregar imagen de la nube
  cloudImg = loadImage("cloud.png")

  //agregar imagenes de los obstaculos
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
  obstacle4 = loadImage("obstacle4.png")
  obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("runing", trex_running);
  
 //agregar tamaño y posicion al trex
 trex.scale = 0.5;
 trex.x = 50;

 //crear el sprite del suelo
 ground = createSprite(200, 180, 400, 20);
 
 //hacer que el suelo se coloque simetricamente en la pantalla
 ground.addImage("ground", groundImage);
 ground.x = ground.width/2;
 ground.velocityX = -4;

 //crear sprite del suelo invisible
 invisibleGround = createSprite(200, 190, 400, 10);
 invisibleGround.visible = false;
}

function draw(){
  background("white");

  // console.log(frameCount);

  //velocidad del suelo
  ground.velocityX = -2;
  // console.log(ground.x);

  //hacer que no se caiga el trex
  if(ground.x < 0){
    ground.x = ground.width/2;
  }

  //hacer que el trex salte al presionar
  if(keyDown("space") && trex.y >=100){
    //hacer que vuelva al suelo
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8;  

   //evitar que el trex caiga
   trex.collide(invisibleGround);

  //aparecer nubes
  spawClouds();

  //aparecer obstaculos
  spawnObstacles();

  drawSprites();
}

function spawClouds(){
 //codigo para aparecer las nubes
 if(frameCount % 60 == 0){
  cloud = createSprite(600, 100, 40, 10);
  cloud.addImage( cloudImg);
  //darle un valor aleatorio a la altura de las nubes
  cloud.y = Math.round(random(10,100))
  cloud.scale = 0.5;
  cloud.velocityX = -3;

  //asignar life time a las variables
  cloud.lifeTime = 200;

  //Ajustar la profundidad de los sprites
  cloud.depth = trex.depth;
  trex.depth = trex.depth + 1;

  //ver la profundidad de los sprites
  // console.log(cloud.depth);
  // console.log(trex.depth);
 }

 
}

function spawnObstacles(){
  if(frameCount % 60 == 0){
    obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -6;
    
    rand = Math.round(random(1, 6));
    console.log(rand)
  
    //generar obstaculos de forma aleatoria
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1)
        break;

      case 2:
        obstacle.addImage(obstacle2)
        break;

      case 3:
        obstacle.addImage(obstacle3)
        break;

      case 4:
        obstacle.addImage(obstacle4)
        break;

      case 5:
        obstacle.addImage(obstacle5)
        break;

      case 6:
        obstacle.addImage(obstacle6)
        break;

      default:
        break;
    }

    obstacle.scale = 0.5;
    obstacle.lifeTime = 300;
  }

  
  
  
}