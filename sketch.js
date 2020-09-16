var fixedrect,movingrect;

function setup()
{
   createCanvas(800,400);
  fixedrect =createSprite(400, 200, 50, 70);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect=createSprite(200,300,40,60);
  movingrect.shapeColor="green";
  movingrect.debug=true;  
}

function draw() {
  background(255,255,255);
  
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width / 2 + fixedrect.width / 2 && 
    fixedrect.x -  movingrect.x < movingrect.width / 2 + fixedrect.width / 2 && 
    movingrect.y - fixedrect.y < movingrect.height / 2 + fixedrect.height / 2 && 
    fixedrect.y -  movingrect.y < movingrect.height / 2 + fixedrect.height / 2 )
  {
    movingrect.shapeColor="orange";
    fixedrect.shapeColor="orange";

  }
  else
  {
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
 
  drawSprites();
}