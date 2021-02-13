var canvas;
var music;
var boxx1,boxx2,boxx3,boxx4,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    boxx1=createSprite(710,595,180,20);
    boxx1.shapeColor="red";

    boxx2=createSprite(500,595,180,20);
    boxx2.shapeColor="green";

    boxx3=createSprite(280,595,180,20);
    boxx3.shapeColor="orange";

    boxx4=createSprite(60,595,180,20);
    boxx4.shapeColor="blue";



    //create box sprite and give velocity
    
    box=createSprite(random(20,750),30,20,20);
    box.velocityX=3;
    box.velocityY=3;
    box.shapeColor="white";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges);
    

//add condition to check if box touching surface and make it box
if(box.isTouching(boxx1)&&box.bounceOff(boxx1)){
        box.shapeColor="red";
        music.play();
    
    }
    if(box.isTouching(boxx2)&&box.bounceOff(boxx2)){
        box.shapeColor="green";
        music.stop();
    }
    
    if(box.isTouching(boxx4)&&box.bounceOff(boxx4)){
        box.shapeColor="blue";
        music.play();
    }
    if(box.isTouching(boxx3)){
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }




    drawSprites();
}
