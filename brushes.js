let furby
let furbyBrushBool = false
let ellipseBrushBool = false




function preload(){
	furby = loadImage('furby.png')
}
function setup(){
	createCanvas(windowWidth,windowHeight)
	background(255)
	imageMode(CENTER)

}


function draw(){
	smooth()
	
	if(ellipseBrushBool == true){
		ellipseBrush()
	}
	if(furbyBrushBool == true){
		furbyBrush()
	}
}


function furbyBrush(){
	if(mouseIsPressed){
		image(furby, mouseX,mouseY,500,500)
	}
}

function ellipseBrush(){
	if(mouseIsPressed){
		noStroke()
		fill(0)
		ellipse(mouseX,mouseY,20,20)
	}
}



function keyPressed(){
	if(key == 'e'){
		ellipseBrushBool = true
		furbyBrushBool = false
	}

	if(key == 'f'){
		furbyBrushBool = true
		ellipseBrushBool = false
	}

	if (key == 'c'){
		background(255)
		// ellipseBrushBool = false
		// furbyBrushBool = false
	}

	if(key == 's'){
		save('paint.jpg')
	}

}






