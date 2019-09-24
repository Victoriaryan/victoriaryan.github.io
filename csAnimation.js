var bunnySpeed =random(1,5);
var frogSpeed=random(1,5);
var bitmojiSpeed=random(1,5);

var x;
x+=bitmojiSpeed;
var y=65;
var bunnyX;  
bunnyX+=bunnySpeed;
var bunnyY=188;
var frogX;
frogX+=frogSpeed;
var frogY = 362;





stroke(255, 168, 207);
fill(255, 204, 242);
ellipse(x+83,y-38,53,52);  //hat


stroke(255, 255, 255);
fill(255, 255, 255);
ellipse(x+45,y+52,80,40); //side head left

stroke(255, 255, 255);
fill(255, 255, 255);
ellipse(x+125,y+52,80,40); //side head right

stroke(255, 234, 0);
fill(255, 234, 0);
ellipse(x+62,y-27,25,30); //left hair part

stroke(255, 234, 0);
fill(255, 234, 0);
ellipse(x+88,y-38,39,25); //right hair part

ellipse(x+51,y-4,6,40); //hair left side

ellipse(x+107,y-10,22,60); //hair right side

ellipse(x+52,y-20,10,20);      //hair  curls left
ellipse(x+55,y+20,30,122);
stroke(255, 255, 255);
fill(255, 255, 255);
ellipse(x+39,y+22,6,20);
ellipse(x+68,y+39,6,21);
ellipse(x+41,y+57,6,20);
       


stroke(255, 234, 0);        //hair  curls right
fill(255, 234, 0);
ellipse(x+108,y+20,30,122);
stroke(255, 255, 255); 
fill(255, 255, 255);
ellipse(x+124,y+22,5,20);
ellipse(x+95,y+40,8,22);
ellipse(x+121,y+57,6,20); 


fill(255, 230, 204);
stroke(255, 230, 204);

rect(x+64,y+55,37,79);
rect(x+44,y+81,78,47);
ellipse(x+60,y+79,10,10);
ellipse(x+103,y+79,10,10);
ellipse(x+49,y+79,10,10);
ellipse(x+117,y+79,10,10);
ellipse(x+39,y+94,30,84);
ellipse(x+125,y+95,30,84);
ellipse(x+119,y+60,10,10);
ellipse(x+43,y+60,10,10);
ellipse(x+122,y+55,10,10);
ellipse(x+41,y+55,10,10);
ellipse(x+71,y+56,10,10); //body

stroke(171, 166, 171);
fill(171, 166, 171);
line(x+100,y+50,x+100,y+75);
line(x+65,y+50,x+65,y+75);
rect(x+45,y+76,76,55);

fill(255, 230, 204);
stroke(237, 220, 199);
ellipse(x+85,y+0,66,80); //head



stroke(0, 0, 0);
fill(255, 230, 204);
ellipse(x+70,y-14,17,10); //left eyebrow border

stroke(255, 230, 204);
fill(255, 230, 204);
ellipse(x+71,y-12,20,10); //left eyebrow set

stroke(0, 0, 0);
fill(255, 230, 204);
ellipse(x+100,y-14,17,10); //right eyebrow border

stroke(255, 230, 204);
fill(255, 230, 204);
ellipse(x+99,y-12,20,10); //right eyebrow set

stroke(0, 0, 0);
fill(255, 255, 255);
ellipse(x+100,y-8,16,10); //right eye border

ellipse(x+70,y-8,16,10); //left eye border

fill(142, 242, 154);
ellipse(x+70,y-8,6,6);//left eye color

fill(142, 242, 154);
ellipse(x+100,y-8,6,6);//right eye color

fill(0, 0, 0);
ellipse(x+70,y-8,1,1);//left eye pupil

fill(0, 0, 0);
ellipse(x+100,y-8,1,1);//right eye pupil


fill(255, 230, 204);
stroke(0, 0, 0);
ellipse(x+85,y+12,10,15); //nose

stroke(255, 230, 204);
rect(x+75,y+10,30,20);  //nose cover

stroke(250, 123, 169);
fill(255, 148, 221);
ellipse(x+85,y+25,24,9); //lips

fill(0, 0, 0);
stroke(0, 0, 0);
line(x+72,y+25,x+97,y+25);
line(x+72,y+25,x+68,y+24);
line(x+102,y+24,x+97,y+25);  //smile

line(x+61,y-8,x+60,y-10);
line(x+109,y-8,x+110,y-10);  //eyelashes

stroke(255, 230, 204);
fill(255, 230, 204);
ellipse(x+85,y+20,1.5,1.5);       //smile side


rect(x+72,y+40,24,15);  //neck





//frog



noStroke();
fill(30, 204, 91); // a nice froggy green!

ellipse(frogX, frogY, 200, 100); // face
ellipse(frogX - 50, frogY - 50, 40, 40); // left eye socket
ellipse(frogX + 50, frogY - 50, 40, 40); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(frogX - 50, frogY - 50, 30, 30); // left eyeball
ellipse(frogX + 50, frogY - 50, 30, 30); // right eyeball


fill(0, 0, 0);
rect(frogX+45,frogY-55,10,10);
rect(frogX-55,frogY-55,10,10);

fill(0, 0, 0);
ellipse(frogX,frogY,115,64);



//bunny



fill(255, 255, 255);
stroke(0, 0, 0);
ellipse(bunnyX+50,bunnyY-30, 60, 120);  // left ear
ellipse(bunnyX+140, bunnyY-30, 60, 120);  // right ear

ellipse(bunnyX+100, bunnyY+70, 150, 150);    // face

fill(0, 0, 0);
ellipse(bunnyX+70, bunnyY+50, 10, 10);  // left eye
ellipse(bunnyX+130, bunnyY+50, 10, 10);  // right eye

line(bunnyX+50, bunnyY+100, bunnyX+150, bunnyY+100);   // mouth

noFill();
rect(bunnyX+85, bunnyY+100, 15, 10); // left tooth
rect(bunnyX+100, bunnyY+100, 15, 10); // right tooth










