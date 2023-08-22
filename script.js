//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject1, fallingObject2, fallingObject3, fallingObject4, fallingObject0, fallingObject5;
let crumpledPaperImg;
let paperImg;
let trashCanImg;
let score = 0;
/* PRELOAD LOADS FILES */
function preload() {
  crumpledPaperImg = loadImage("assets/crumpledPaper.png");
  paperImg = loadImage("assets/paper.png");
  trashCanImg = loadImage("assets/trashCan.png");
  letterImg = loadImage("assets/letter-png-transparent-letter-images-pluspng-17.png");
}

/* SETUP RUNS ONCE */
function setup() {
  world.gravity.y = .2;
  createCanvas(400, 400);
  background(224, 224, 224);

  //Image sizes
  crumpledPaperImg.resize(60, 40);
  paperImg.resize(35, 60);
  trashCanImg.resize(75, 75);
  letterImg.resize(45, 35);

  //Create catcher 
  catcher = new Sprite(trashCanImg, 200, 350);
  catcher.collider = "k";

  //Create falling object
  fallingObject0 = new Sprite(crumpledPaperImg, 148, 0, 10);
  fallingObject0.vel.y = random(2, 3);
  fallingObject0.rotationLock = true;

  fallingObject1 = new Sprite(crumpledPaperImg, 100, 0, 10);
  fallingObject1.vel.y = random(2, 3);
  fallingObject1.rotationLock = true;

  fallingObject2 = new Sprite(paperImg, 200, 0, 10);
  fallingObject2.vel.y = 2;
  fallingObject2.rotationLock = true;

  fallingObject3 = new Sprite(paperImg, 20, 0, 10);
  fallingObject3.vel.y = 2;
  fallingObject3.rotationLock = true;

  fallingObject4 = new Sprite(letterImg, 300, 0, 10);
  fallingObject4.vel.y = 2;
  fallingObject4.rotationLock = true;

  fallingObject5 = new Sprite(letterImg, 65, 0, 10);
  fallingObject5.vel.y = 2;
  fallingObject5.rotationLock = true;

}

/* DRAW LOOP REPEATS */
function draw() {
  background(224, 224, 224);

  fill(191, 189, 189);
  textSize(40);
  text("Catch the Trash", width / 2 - 150, height / 2);

  // Draw directions to screen
  fill(139, 134, 189);
  textSize(12);
  text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \n crumpled paper. \nDo not catch the \ndocuments or letters.", width - 125, 20);

  //If fallingObject reaches bottom, move back to top
  if (fallingObject1.y >= height) {
    fallingObject1.y = 0;
    fallingObject1.x = random(50, 350);
    fallingObject1.vel.y = random(2, 4);
    score = score - 1;

  }
  else if (fallingObject0.y >= height) {
    fallingObject0.y = 0;
    fallingObject0.x = random(50, 350);
    fallingObject0.vel.y = random(2, 4);
    score = score - 1;

  }
  else if (fallingObject2.y >= height) {
    fallingObject2.y = 0;
    fallingObject2.x = random(50, 350);
    fallingObject2.vel.y = random(2, 4);
  }
  else if (fallingObject3.y >= height) {
    fallingObject3.y = 0;
    fallingObject3.x = random(50, 350);
    fallingObject3.vel.y = random(2, 4);
  }
  else if (fallingObject4.y >= height) {
    fallingObject4.y = 0;
    fallingObject4.x = random(50, 350);
    fallingObject4.vel.y = random(2, 4);
  }
  else if (fallingObject5.y >= height) {
    fallingObject5.y = 0;
    fallingObject5.x = random(50, 350);
    fallingObject5.vel.y = random(2, 4);
  }
  else if (score < 0) {
    background(224, 224, 224);
    catcher.pos = { x: -500, y: -500 };
    fallingObject1.pos = { x: -500, y: -500 };
    fallingObject2.pos = { x: -500, y: -500 };
    fallingObject3.pos = { x: -500, y: -500 };
    fallingObject4.pos = { x: -500, y: -500 };
    fallingObject0.pos = { x: -500, y: -500 };
    fallingObject5.pos = { x: -500, y: -500 };

    fill(227, 98, 98);
    textSize(20);
    text("You lose!", width / 2 - 50, height / 2 - 30);

    textSize(12);
    text("Refresh to play again.", width / 2 - 65, height / 2);
  } 
  else if (score == 10){
    background(224, 224, 224);
    catcher.pos = { x: -500, y: -500 };
    fallingObject1.pos = { x: -500, y: -500 };
    fallingObject2.pos = { x: -500, y: -500 };
    fallingObject3.pos = { x: -500, y: -500 };
    fallingObject4.pos = { x: -500, y: -500 };
    fallingObject0.pos = { x: -500, y: -500 };
    fallingObject5.pos = { x: -500, y: -500 };

    fill(132, 194, 85);
    textSize(20);
    text("You Won!", width / 2 - 50, height / 2 - 30);

    textSize(12);
    text("Refresh to play again.", width / 2 - 65, height / 2);
  }

  //Move catcher
  if (kb.pressing("left")) {
    catcher.vel.x = -3;
  } else if (kb.pressing("right")) {
    catcher.vel.x = 3;
  } else {
    catcher.vel.x = 0;
  }

  //Stop catcher at edges of screen
  if (catcher.x < 40) {
    catcher.x = 40;
  } else if (catcher.x > 360) {
    catcher.x = 360;
  }

  if (fallingObject1.collides(catcher)) {
    fallingObject1.y = 0;
    fallingObject1.x = random(width);
    fallingObject1.vel.y = random(2, 3);
    fallingObject1.direction = "down";

    score = score + 1;

  }
  else if (fallingObject0.collides(catcher)) {
    fallingObject0.y = 0;
    fallingObject0.x = random(width);
    fallingObject0.vel.y = random(2, 3);
    fallingObject0.direction = "down";

    score = score + 1;
  }
  else if (fallingObject2.collides(catcher)) {
    fallingObject2.y = 0;
    fallingObject2.x = random(width);
    fallingObject2.vel.y = random(2, 4);
    fallingObject2.direction = "down";

    score = score - 1;
  }
  else if (fallingObject3.collides(catcher)) {
    fallingObject3.y = 0;
    fallingObject3.x = random(width);
    fallingObject3.vel.y = random(2, 4);
    fallingObject3.direction = "down";

    score = score - 1;

  }
  else if (fallingObject4.collides(catcher)) {
    fallingObject4.y = 0;
    fallingObject4.x = random(width);
    fallingObject4.vel.y = random(2, 4);
    fallingObject4.direction = "down";

    score = score - 2;

  }
  else if (fallingObject5.collides(catcher)) {
    fallingObject5.y = 0;
    fallingObject5.x = random(width);
    fallingObject5.vel.y = random(2, 4);
    fallingObject5.direction = "down";

    score = score - 2;

  }
  //Add the score to the screen
  fill(139, 134, 189);
  textSize(20);
  text("Score: " + score, 15, 35);

  
}
