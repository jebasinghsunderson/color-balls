var movingbox,fristbox,secondox,thirdbox,fourthbox;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    


     movingbox=createSprite(random(20,570),50,30,30);
     movingbox.shapeColor="white";
     movingbox.velocityX=-4;
     movingbox.velocityY=7;
     //movingbox.velocityX=1;
     //movingbox.velocityY=7;
    //create 4 different surfaces
    fristbox=createSprite(100,580,180,20);
    fristbox.shapeColor="lime";

    secondbox=createSprite(300,580,180,20);
    secondbox.shapeColor="red"

    thirdbox=createSprite(500,580,180,20);
    thirdbox.shapeColor="pink"

    fourthbox=createSprite(700,580,180,20);
    fourthbox.shapeColor="darkblue"
    //create box sprite and give velocity

}

function draw() {
    background(0);
    console.log(movingbox.y)
   
    var edge=createEdgeSprites();
    //create edgeSprite
   
 if(fristbox.isTouching(movingbox) && movingbox.bounceOff(fristbox))
    {     movingbox.shapeColor="lime";
     music.play(); 
    }
if(secondbox.isTouching(movingbox) && movingbox.bounceOff(secondbox))
    {    
        movingbox.shapeColor="red";
        movingbox.velocityX=0;
        movingbox.velocityY=0;
        music.stop()
    }  
if(thirdbox.isTouching(movingbox) && movingbox.bounceOff(thirdbox))
    {    
        movingbox.shapeColor="pink";
    }    
if(fourthbox.isTouching(movingbox) && movingbox.bounceOff(fourthbox))
    {    
        movingbox.shapeColor="darkblue";
    }    
if(edge.isTouching(movingbox)){
    movingbox.bounceOff(edge)
}
   /*if(isTouching(movingbox,fristbox)){
       movingbox.shapeColor="lime";
   }
   else{
      movingbox.shapeColor="gold";
   }
 if(isTouching(movingbox,secondbox)){
 movingbox.shapeColor="red";
}  
 else{
    movingbox.shapeColor="gold";
}
if(isTouching(movingbox,thirdbox)){
    movingbox.shapeColor="pink";
}
else{
    movingbox.shapeColor="gold";
}*/

var edge=createEdgeSprites();
    drawSprites();
  
    //add condition to check if box touching surface and make it box
}
