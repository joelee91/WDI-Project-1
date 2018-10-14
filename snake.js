var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// setInterval(game, 1000);

var snakeHead;
var snake = [];
var speed = [
	{x:speedX, y:speedY}
]
var speedX;
var speedY;
var positionX = 10;
var positionY = 100;
var width = 9;
var height = 9;
var snakeTail = 9;

class DrawSnake  {
	constructor(x, y, width, height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	context.beginPath();
	context.fillRect(this.x, this.y, width, height);
	context.stroke();
	}
}

function snakeBody () {
	for (i = 0; i < snakeTail; i++) {
		snake.push ({x:positionX, y:positionY})
	}
}

function addBody () {
	for (i = 0; i < snake.length; i++) {
		snakeHead = new DrawSnake(positionX * i, positionY, width, height);
	}
}

// function moveRight() {
// 	snake.push({x:positionX, y:positionY});
// }


function game() {
// moveRight();
snakeBody();
addBody();
}
game();