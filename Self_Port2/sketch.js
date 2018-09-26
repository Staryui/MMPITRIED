//Non Hardcoded Self Port

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(28);
	
//ears
    var earsize = 55;
     var earx = 255;
     var eary = 189;
//head
    var headsize = frameCount; 
     var headx = 320;
     var heady = 180;
//lids
   var lidy = 170
    var lidang = 40
    var lidleft = 370
    var lidright = 280
//arc
    var arcc = 60
    var arcd = 23
    var arcs = 0
//mouth
    var mouthx = 310
    var mouthy = 230
    var mouthang = 30
//eyes  
   var eyesy = 178 
   var eyesize = 25
   var eyeleft = 285
   var eyeright = 375
   
//Trying to make the eyes change 
   
   
   
    fill("lightcyan");
    ellipse(earx, eary, earsize); //ear
	
    noStroke();
    ellipse(headx, heady, headsize); //head
   
    stroke("steelblue")
    noFill();
    arc(lidleft, lidy, lidang, arcd, arcc, arcs) //lid right
    arc(lidright, lidy, lidang, arcd, arcc, arcs); //lid left
   fill("powderblue")
    ellipse(eyeleft, eyesy, eyesize) //eye left
    ellipse(eyeright, eyesy, eyesize) //eye right
    noFill();     
         arc(mouthx, mouthy, mouthang, arcd, arcc, arcs) //mouth 
}