function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(28);
	ellipse(255, 189, 55); //ear
	ellipse(320, 180, 145); //head
    arc(370, 170, 40, 23, 60, 0) //lid right
    arc(280, 170, 40, 23, 60, 0); //lid left
    ellipse(285, 178, 25) //eye left
       ellipse(375, 178, 25) //eye right
         arc(310, 230, 30, 23, 60, 0) //mouth 
}