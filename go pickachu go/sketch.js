var pikachu,pikachuimage
var bg,bgimage
var ghostGroup,ghost;
var haunter,gengar,gastly
function preload(){
  pikachuimage=loadAnimation("images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg")
  bgimage=loadImage("images/bg.jpg")
  gastly=loadAnimation("images/gastly1.png","images/gastly2.png","images/gastly3.png","images/gastly4.png")
  haunter=loadAnimation("images/haunter1.png","images/haunter2.png","images/haunter3.png","images/haunter4.png","images/haunter5.png")
 gengar=loadAnimation("images/gengar1.png","images/gengar2.png","images/gengar3.png","images/gengar4.png","images/gengar5.png")
}
function setup(){
  createCanvas (1000,700)
 
bg=createSprite(500,300,1000,600)
bg.addImage(bgimage)
bg.scale=2.9
bg.velocityX=-5

pikachu=createSprite(70,470)
pikachu.scale=0.6
pikachu.addAnimation("running",pikachuimage)

gastlyGroup=new Group()
gengarGroup=new Group()
haunterGroup=new Group()
}
function draw (){
  background("blue")
  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  var r = Math.round(random(1,3))

  switch(r){
    case 1:spawngastly()
    break;
    case 2:spawngengar()
    break;
    case 3:spawnhaunter()
    break;
  }

  
  drawSprites()
}
function spawngastly(){
  if(World.frameCount % 100 === 0) {
    var gastly = createSprite(1000,410,10,40);
    gastly.addAnimation("gas",gastly)
    gastly .velocityX = -6;            
    gastly .scale = 0.5;
    //ghost.lifetime = 70;
    gastlyGroup.add(gastly); 
  }
}
function spawngengar(){
  if(World.frameCount % 100 === 0) {
    var gengar = createSprite(1000,410,10,40);
    gengar.addAnimation("gen",gengar)
    gengar .velocityX = -6;            
    gengar .scale = 0.5;
    //ghost.lifetime = 70;
    gengarGroup.add(gengar); 
  }
}
function spawnhaunter(){
  if(World.frameCount % 100 === 0) {
    var haunter = createSprite(1000,410,10,40);
    haunter.addAnimation("haun",haunter)
    haunter.velocityX = -6;            
    haunter.scale = 0.5;
    //ghost.lifetime = 70;
    haunterGroup.add(haunter); 
  }
}