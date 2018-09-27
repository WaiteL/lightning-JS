var startx=0;
var starty=150;
var endx=0;
var endy=150;

function setup()
{
createCanvas(300,300);
strokeWeight(3);
background(27, 2, 55);
}
function draw()
{
stroke((int)(Math.random()*256),(int)(Math.random()*256),(int)(Math.random()*256));

while(endx<301){

endx = startx + (int)(Math.random()*10);
endy = starty + (int)(Math.random()*19)-9;

line(startx,starty,endx,endy);
startx=endx;
starty=endy;
}
}

function mousePressed()
{
startx=0;
starty=150;
endx=0;
endy=150;
}
