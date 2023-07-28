let libs = ['https://unpkg.com/p5.tween/dist/p5.tween.min.js']
let tween
let A
let B
let activeimg
let imgs = []
let letters = []
let activeLetters = 0
let startX = 100
let startY = 170
let ar 

const myShape = {
	x: startX,
	y: startY,
	w: 200,
	h: 200
}


function preload() {
	A = loadImage('data/stamp/HGK_10.png')
	B = loadImage('data/stamp/HGK_15.png')
	imgs.push(A)
	imgs.push(B)
}

function setup() {
	
	ar = createGraphics(895, 1280, P2D, document.getElementById('canvas'))
	// background(0, 0, 0)
	background(0, 0, 0)
	createCanvas(895, 1280)
	tween = p5.tween.manager.addTween(myShape)
	motionO()
	activeimg = random(imgs)
	letters.push(motionO)
	letters.push(motionP)
	letters.push(motionE)
	letters.push(motionN)
	tween.startTween()
}

function draw() {
	clear()
	ar.reset()
	// ar.scale(.8)
	if(!tween.active) {
		tween.resetMotions()
		myShape.x = startX
		myShape.y = startY
		activeLetters++
		ar.clear()
		letters[activeLetters % 4]()
		tween.startTween()
	}
	// background(0)

	noCursor()
	ar.push()
	// translate(-width/2, -height*.3)

	let loopCount = 15
	for(let d = 0; d < loopCount; d++) {
		let scl = .14 //frameCount*.001%3
		ar.image(activeimg, myShape.x + d * 5, myShape.y + sin(d * .4 + frameCount * .35) * 30, myShape.w, myShape.h)
	}
	ar.pop()
	image(ar,0,0)
}


function motionO() {
	activeimg = random(imgs)
	
	  myShape.x = 350
	tween.addMotions([
        { key: 'x', target: 250 },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 270 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 750 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 200},
        { key: 'y', target: 850},
      ], 1000)
    .addMotions([
        { key: 'x', target: 450},
        { key: 'y', target: 850},
      ], 1000)
    .addMotions([
        { key: 'x', target: 550 },
        { key: 'y', target: 750},
      ], 1000)
    .addMotions([
        { key: 'x', target: 550 },
        { key: 'y', target: 270},
      ], 1000)
    .addMotions([
        { key: 'x', target: 450 },
        { key: 'y', target: 170},
      ], 1000)
    .addMotions([
        { key: 'x', target: 350 },
        { key: 'y', target: 170},
      ], 1000)
}

function motionP() {
	activeimg = random(imgs)
	
	tween.addMotions([
        { key: 'x', target: 400 },
        { key: 'y', target: 'y' },
      ], 1000)
	.addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 270 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 420 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 400 },
        { key: 'y', target: 520 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 520 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170},
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850},
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170},
      ], 1000)
}

function motionE() {
	activeimg = random(imgs)
	
   tween.addMotions([
        { key: 'x', target: 400},
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 400},
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 490 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 350},
        { key: 'y', target: 490 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 490 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100},
        { key: 'y', target: 170},
      ], 1000)

}

function motionN() {
	activeimg = random(imgs)

    tween.addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 530 },
        { key: 'y', target: 850},
      ], 1000) 
    .addMotions([
        { key: 'x', target: 530 },
        { key: 'y', target: 170},
      ], 1000) 
    .addMotions([
        { key: 'x', target: 530 },
        { key: 'y', target: 850},
      ], 1000) 
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 170},
      ], 1000) 

}
