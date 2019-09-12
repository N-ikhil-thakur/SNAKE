var snake;
var food;
var buttonL , buttonR , buttonU , buttonD;

function setup() {

	createCanvas(300,450);
	frameRate(10);
	buttonU  = createButton('UP');

	snake = new snake();
	food = new food();
}

function draw() {
	background(100,150,150);
	snake.show();
	snake.update();
	snake.death();

	food.show();
	food.update();
}


function keyPressed() {
	if(keyCode == UP_ARROW && snake.moving != "down"){
		snake.up();
		console.log("UP");
	}
	if(keyCode == DOWN_ARROW && snake.moving != "up"){
		snake.down();
		console.log("DOWN");

	}
	if(keyCode == LEFT_ARROW && snake.moving != "right"){
		snake.left();
		console.log("LEFT");

	}
	if(keyCode == RIGHT_ARROW && snake.moving != "left"){
		snake.right();
		console.log("RIGHT");
	}

}