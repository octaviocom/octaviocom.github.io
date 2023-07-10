

let startScreenBool = true

let winScreenBool = false
let loseScreenBool = false

let QuestionIBool = false
let QuestionIIBool = false
let QuestionIIIBool = false

let brain
let intelligence
let elegant
let question

let playButton



function preload(){
	brain = loadImage('brain.png')
	intelligence = loadImage('intelligence.png')
	elegant = loadImage('elegant.png')
	question = loadImage('Question.png')
}


function setup(){
createCanvas(windowWidth, windowHeight)
textAlign(CENTER)
imageMode(CENTER)

QuestionIBool = false



}

function draw(){
	print(mouseX, mouseY)
	if (startScreenBool = true){
		startScreen()

	}

	if (QuestionIBool = true){
		QuestionI()
	}else{
		startScreen()
	}

	if (QuestionIIBool = true){
		
	}else{
		startScreen()
	}

	if(QuestionIIIBool = true){
		

	}else{
		startScreen()
	}
	

}

function startScreen(){
	//add images with brains and intelligence ;)
		image(elegant, windowWidth/2, windowHeight/2, 1640, 1000 )
		textSize(40)
		fill(80, 91, 173)
		text('Cognitive Reflection Test', windowWidth/2, windowHeight/4)
		textSize(20)
		fill(38, 43, 82)
		text('Made by: Shane Fredrick', windowWidth/2, windowHeight/4+25)
		text('Designed by: Octavio Combellas-Jaimes', windowWidth/2, windowHeight/4+50)
		image(brain, windowWidth/4 - 30, windowHeight/2, 350, 300)
		image(intelligence , windowWidth*3/4+30, windowHeight/2, 350, 300)
		
}

function QuestionI(){
	image(question, windowWidth/2, windowHeight/2, 1640, 1000)
}