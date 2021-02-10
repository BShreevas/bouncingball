var canvas;
var music;
var box;                                    
var b1,b2,b3,b4,box; 
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 
    //create 4 different surfaces
   b1=createSprite(0,580,360,30);
b1.shapeColor=rgb(0,0,255);
b2=createSprite(295,580,200,30);
b2.shapeColor=rgb(255,128,0);
b3=createSprite(515,580,200,30);
b3.shapeColor=rgb(153,0,76);
b4=createSprite(740,580,220,30);
b4.shapeColor=rgb(0,100,0);
box=createSprite(random(20,750),100,40,40);
box.velocityX=4;
box.velocityY=9;
box.shapeColor="red";


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);
if (isTouch(box,b1)){
bounce(box,b1)
    box.shapeColor=rgb(0,0,255);
}
if (isTouch(box,b2)){
    bounce(box,b2)
        box.shapeColor=rgb(255,128,0);
        box.velocityX=0;
box.velocityY=0;
    }
    if (isTouch(box,b3)){
        bounce(box,b3)
            box.shapeColor=rgb(153,0,76);
        }
        if (isTouch(box,b4)){
            bounce(box,b4)
                box.shapeColor=rgb(0,100,0);
            }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
