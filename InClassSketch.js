	let ellipseX = 300;
	let furby

	function preload(){
		furby = loadImage('furby.png')
	}

	function setup(){

		createCanvas (windowWidth, windowHeight)
		imageMode(CENTER)
		background(255, 2, 255)
	}


	function draw(){

		// if(keyIsPressed == true){
		// 	background(100, 163, 235);
		//ellipseX = 800
		// }else{
		// 	background(255, 2, 255)
		//ellipseX = 300
		// }

		for(let i=0; i<windowWidth; i=i+10){
			print(i)
			line(i, 0, i, windowHeight);
		}

		 for(let i=0; i<windowHeight; i=i+10){
		 	line(0,i,windowWidth,i)

		 }
		 //for(let i=0; i<windowHeight; i=i+10){
		 	//ellipse(random(windowWidth),random(windowHeight),20,20)
		 //}

		textSize(40)
		text('Octavio', 200, 200)


		ellipse(ellipseX, 500, 100, 100)

		if(mouseIsPressed == true){
			image(furby, mouseX, mouseY, 30, 30)

	}else{
		image(furby, mouseX, mouseY, 1, 1)
	}
}
	
		
	