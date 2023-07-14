let canvas

let startScreenBool = true

// let winScreenBool = false
// let loseScreenBool = false
let endScreenBool = false

let QuestionIBool = false
let QuestionIIBool = false
let QuestionIIIBool = false 
let QuestionIVBool = false
let QuestionVBool = false 
let QuestionVIBool = false
let QuestionVIIBool = false
let QuestionVIIIBool = false
let xButtonBool = false

let brain
let intelligence
let elegant
let question
let clickbait
let adv1 
let adv2
let adv3 
let adv4 
let adv5 
let adv6 
let adv7 
let adv8 
let adv9
let xButton
let buttonX
let imgs = []
let randImage = 0

let inp1
let inp2
let inp3
let inp4
let inp5
let inp6
let inp7
let inp8
let inp9
// let checkText1
// let checkText2
// let checkText3
// let checkText4
// let checkText5
// let checkText6
// let checkText7
// let checkText8
let typed
let myButton

let playButton

let x = []
let y = []





function preload(){
	brain = loadImage('brain.png')
	intelligence = loadImage('intelligence.png')
	elegant = loadImage('elegant.png')
	question = loadImage('question.png')
	clickbait = loadImage('clickbait.png')
	adv1 = loadImage('bbb.png')
	adv2 = loadImage('BPS.png')
	adv3 = loadImage('hungry.png')
	adv4 = loadImage('sub.png')
	adv5 = loadImage('prof.png')
	adv6 = loadImage('health.png')
	adv7 = loadImage('monk.png')
	adv8 = loadImage('slid.png')
	adv9 = loadImage('robux.png')
	xButton = loadImage('xButton.png')
	imgs = [adv1, adv2, adv3, adv4, adv5, adv6, adv7, adv8]
}


function setup(){
	canvas = createCanvas(windowWidth, windowHeight)
	canvas.style('z-index','-1')
	canvas.position (0,0)
	textAlign(CENTER)
	imageMode(CENTER)
	rectMode(CENTER)

	inp1 = createInput('_ cents')
	inp1.hide()

	myButton = createButton('submit')
	myButton.hide()

	inp2 = createInput('_ minutes')
	inp2.hide()

	inp3 = createInput('day _')
	inp3.hide()

	inp4 = createInput('_ feet and _ inches')
	inp4.hide()

	inp5 = createInput('')
	inp5.hide()

	inp6 = createInput('')
	inp6.hide()

	inp7 = createInput('')
	inp7.hide()

	inp8 = createInput('')
	inp8.hide()

	buttonX = createButton('X')
	buttonX.hide()



}

function draw(){
	print(mouseX, mouseY)

	// print(QuestionIVBool)
	// print(QuestionVBool)
	if (startScreenBool == true){
		startScreen()
	}
	if(QuestionIBool == true){
		QuestionI()
	}
	if(QuestionIIBool == true){
		QuestionII()
	}
	if(QuestionIIIBool == true){
		QuestionIII()
	}
	if(QuestionIVBool == true){
		QuestionIV()
	}
	if(QuestionVBool == true){
		QuestionV()
	}
	if(QuestionVIBool == true){
		QuestionVI()
	}
	if(QuestionVIIBool == true){
		QuestionVII()
	}
	if(QuestionVIIIBool == true){
		QuestionVIII()
	}
	if (endScreenBool == true){
		endScreen()
	}

	
	

}


function keyPressed(){

	if(keyCode===ENTER){
		if(startScreenBool == true){
			startScreenBool = false 
			QuestionIBool = true
		}
	}
	
	

	// if (keyCode === LEFT_ARROW){
	// 	if(QuestionIBool == true){
	// 		startScreenBool = true
	// 		QuestionIBool = false
	// 	}
	// 	else if(QuestionIIBool == true){
	// 		QuestionIBool = true
	// 		QuestionIIBool = false
	// 	}
	// 	else if (QuestionIIIBool== true){
	// 		QuestionIIBool = true
	// 		QuestionIIIBool = false
	// 	}
	// 	else if (QuestionIVBool== true){
	// 		QuestionIIIBool = true 
	// 		QuestionIVBool = false 
	// 	}
	// 	else if (QuestionVBool== true){
	// 		QuestionIVBool = true 
	// 		QuestionVBool = false 
	// 	}
	// 	else if (QuestionVIBool== true){
	// 		QuestionVBool = true 
	// 		QuestionVIBool = false 
	// 	}
	// 	else if (QuestionVIIBool== true){
	// 		QuestionVIBool = true 
	// 		QuestionVIIBool = false 
	// 	}
	// 	else if (QuestionVIIIBool == true){
	// 		QuestionVIIBool = true 
	// 		QuestionVIIIBool = false
	// 	}
	// 	else if (endScreenBool == true){
	// 		QuestionVIII=true 
	// 		endScreenBool = false
	// 	}

	// }
}

function startScreen(){
	image(elegant, windowWidth/2, windowHeight/2, 1640, 1000 )
	textSize(40)
	fill(80, 91, 173)
	text('Cognitive Reflection Test', windowWidth/2, windowHeight/4)
	textSize(20)
	fill(38, 43, 82)
	text('Made by: Octavio Combellas-Jaimes', windowWidth/2, windowHeight/4+25)
	text('Designed by: Octavio Combellas-Jaimes', windowWidth/2, windowHeight/4+50)
	fill(40)
	text('credit to Shane Fredrick for Question 1, 2, and 3', windowWidth-230, windowHeight-20)
	image(brain, windowWidth/4 - 30, windowHeight/2, 350, 300)
	image(intelligence , windowWidth*3/4+30, windowHeight/2, 350, 300)
	image(clickbait, windowWidth/5, windowHeight/4, 350, 300)
	image(clickbait, windowWidth/5, windowHeight*3/4, 350, 300)
	push()
	scale(-1,1)
	image(clickbait, -windowWidth*4/5, windowHeight/4, 350, 300)
	image(clickbait, -windowWidth*4/5, windowHeight*3/4, 350, 300)
	pop()
	fill(38,43,82)
	rect(windowWidth/2, windowHeight/2-10, 500, 100)
	fill(0)
	textSize(40)
	text('Press ENTER to Start Quiz', windowWidth/2, windowHeight/2)


// function typing(){

// 	typed = this.value()
// }


}

function QuestionI(){
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	// alert('FREE MONEY')
	fill(255)
	textSize(25)
	text('QUESTION 1', windowWidth/2 , windowHeight/2 - 100)
	text('A bat and a ball cost $1.10 in total. The bat costs $1 more than the ball. How much does the ball cost?', windowWidth/2, windowHeight/2)
	image(adv1, 160, 105, 321, 213)
	
	inp1.show()
	inp1.position(windowWidth/2-175, windowHeight/2+50)
	myButton.show()
	myButton.position(650 + inp1.width, windowHeight/2+50)
	myButton.mousePressed(QuestionII)
	inp1.size(350)
	
	}

	// function checkText1(){
	// 	if(inp1.value('5 cents')){
	// 		QuestionII()
	// 	}else{
	// 		QuestionI()
	// 		text('TRY AGAIN')
	// 		text.position(windowWidth/2, windowHeight/2+400)
	// 	}
	// }
	
	
	// inp1.changed(QuestionII)
	// text(value, 209, 207)



function QuestionII(){
	QuestionIBool = false
	QuestionIIBool = true
	inp1.hide()
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	fill(255)
	text('QUESTION 2',windowWidth/2, windowHeight/2 -100)
	text('If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?', windowWidth/2, windowHeight/2)
	image(adv1, 160, 105, 321, 213)
	image(adv2, adv1.width-100, 105, 321, 213)
	// let inp2 = createInput('')
	// inp2.position(209, 297)
	// inp2.size(350)
	// inp2.input(myInput2)
	inp2.show()
	myButton.show()
	myButton.mousePressed(QuestionIII)
	inp2.position(windowWidth/2-175, windowHeight/2+50)
	inp2.size(350)
}

function QuestionIII(){
	QuestionIIBool = false
	QuestionIIIBool = true
	inp2.hide()
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	fill(255)
	text('QUESTION 3',windowWidth/2, windowHeight/2-100)
	let lines = 'In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, \n how long would it take for the patch to cover half of the lake?'
	textLeading(30) 
	text(lines, windowWidth/2, windowHeight/2)
	image(adv1, 160, 105, 321, 213)
	image(adv2, adv1.width-100, 105, 321, 213)
	image(adv3, adv2.width+500, 105, 321, 213)
	myButton.mousePressed(QuestionIV)
	inp3.show()
	inp3.position(windowWidth/2-175, windowHeight/2+50)
	inp3.size(350)
	
}

function QuestionIV(){
	QuestionIIIBool = false
	QuestionIVBool = true
	inp3.hide()
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	fill(255)
	text('QUESTION 4',windowWidth/2, windowHeight/2-100)
	text('How tall are you?', windowWidth/2, windowHeight/2)
	image(adv1, 160, 105, 321, 213)
	image(adv2, adv1.width-100, 105, 321, 213)
	image(adv3, adv2.width+500, 105, 321, 213)
	image(adv4, adv3.width+1000, 105, 321, 213)
	myButton.mousePressed(QuestionV)
	inp4.show()
	inp4.position(windowWidth/2-175, windowHeight/2+50)
	inp4.size(350)
}

function QuestionV(){
	QuestionIVBool = false
	QuestionVBool = true
	inp4.hide()
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	fill(255)
	text('QUESTION 5',windowWidth/2, windowHeight/2-100)
	text('What is your favorite color?', windowWidth/2, windowHeight/2)
	image(adv1, 160, 105, 321, 213)
	image(adv2, adv1.width-100, 105, 321, 213)
	image(adv3, adv2.width+500, 105, 321, 213)
	image(adv4, adv3.width+1000, 105, 321, 213)
	image(adv5, adv1.width-400, 800, 321, 213)
	myButton.mousePressed(QuestionVI)
	inp5.show()
	inp5.position(windowWidth/2-175, windowHeight/2+50)
	inp5.size(350)

}

function QuestionVI(){
	QuestionVBool = false
	QuestionVIBool = true
	inp5.hide()
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	fill(255)
	text('QUESTION 6',windowWidth/2, windowHeight/2-100)
	text('What is your zodiac sign?', windowWidth/2, windowHeight/2)
	image(adv1, 160, 105, 321, 213)
	image(adv2, adv1.width-100, 105, 321, 213)
	image(adv3, adv2.width+500, 105, 321, 213)
	image(adv4, adv3.width+1000, 105, 321, 213)
	image(adv5, adv1.width-400, 800, 321, 213)
	image(adv6, adv1.width, 800, 321, 213)
	myButton.mousePressed(QuestionVII)
	inp6.show()
	inp6.position(windowWidth/2-175, windowHeight/2+50)
	inp6.size(350)
}

function QuestionVII(){
	QuestionVIBool = false
	QuestionVIIBool = true
	inp6.hide()
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	fill(255)
	text('QUESTION 7',windowWidth/2, windowHeight/2-100)
	text('What starts with "e," ends with "e," but only has one letter in it? ', windowWidth/2, windowHeight/2)
	image(adv1, 160, 105, 321, 213)
	image(adv2, adv1.width-100, 105, 321, 213)
	image(adv3, adv2.width+500, 105, 321, 213)
	image(adv4, adv3.width+1000, 105, 321, 213)
	image(adv5, adv1.width-400, 800, 321, 213)
	image(adv6, adv1.width, 800, 321, 213)
	image(adv7, adv1.width+400, 800, 321, 213)

	myButton.mousePressed(QuestionVIII)
	inp7.show()
	inp7.position(windowWidth/2-175, windowHeight/2+50)
	inp7.size(350)

}

function QuestionVIII(){
	QuestionVIIBool = false
	QuestionVIIIBool = true
	inp7.hide()
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	fill(255)
	text('QUESTION 8',windowWidth/2, windowHeight/2-100)
	text('Who is your favorite Disney Princess?', windowWidth/2, windowHeight/2)
	image(adv1, 160, 105, 321, 213)
	image(adv2, adv1.width-100, 105, 321, 213)
	image(adv3, adv2.width+500, 105, 321, 213)
	image(adv4, adv3.width+1000, 105, 321, 213)
	image(adv5, adv1.width-400, 800, 321, 213)
	image(adv6, adv1.width, 800, 321, 213)
	image(adv7, adv1.width+400, 800, 321, 213)
	image(adv8, adv1. width + 800, 800, 321, 213)
	myButton.mousePressed(endScreen)
	inp8.show()
	inp8.position(windowWidth/2-175, windowHeight/2+50)
	inp8.size(350)
}

function endScreen(){
	QuestionVIIIBool = false 
	endScreenBool = true
	inp8.hide()
	myButton.hide()

	// image(question, windowWidth/2, windowHeight/2, 1640, 1000)
	// fill(255)
	// text('QUESTION 8',windowWidth/2, windowHeight/2-100)
	// text('YESSIR', windowWidth/2, windowHeight/2)
	// myButton.mousePressed()
	// inp9 = createInput('')
	// inp9.position(windowWidth/2-175, windowHeight/2+50)
	// inp9.size(350)
	background(0)
	image(adv1, 160, 105, 321, 213)
	image(adv2, adv1.width-100, 105, 321, 213)
	image(adv3, adv2.width+500, 105, 321, 213)
	image(adv4, adv3.width+1000, 105, 321, 213)
	image(adv5, adv1.width-400, 800, 321, 213)
	image(adv6, adv1.width, 800, 321, 213)
	image(adv7, adv1.width+400, 800, 321, 213)
	image(adv8, adv1. width + 800, 800, 321, 213)
	image(adv9, windowWidth/2, windowHeight/2, 1400, 900)
	// image(xButton, windowWidth*12/13, windowHeight/30, 50, 50)
	buttonX.show()
	buttonX.position(windowWidth*12/13, windowHeight/50)
	buttonX.mousePressed(randomImages())

	
	// if (mouseIsPressed && 1373<mouseX<1563 && 33<mouseY<150){
	// loop()
	// 
	//popUpButton()
	// }

}

// function popUpButton(){
// 	randImage = int(random(imgs.length))
// 	loop()
// 	image(imgs[randImage], random(x.pos), random(y.pos))
	
// }

function randomImages(){
	for(let i=0; i<x.length; i++)
		
		image(random(imgs), x[i], y[i], 321, 213)


}

function mouseReleased(){
	x.push(mouseX)
	y.push(mouseY)

	print(x.length)
}
		

		
// 	
// }
