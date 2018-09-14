//Non Hardcoded Self Port

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(28);
	
    var earsize = 55;
    var earx = 255;
    var eary = 189;
    
    var headsize = 145; 
    var heady = 180;
    var headx = 320;
    
    
    ellipse(earx, eary, earsize); //ear
	ellipse(headx, heady, headsize); //head
    arc(370, 170, 40, 23, 60, 0) //lid right
    arc(280, 170, 40, 23, 60, 0); //lid left
    ellipse(285, 178, 25) //eye left
    ellipse(375, 178, 25) //eye right
         arc(310, 230, 30, 23, 60, 0) //mouth 
}