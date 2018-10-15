var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
setInterval(game, 100);

var snake = [];
var food = [];
var length = 4;

function snakeHead() {
	for (i = 0; i < length; i++){
		snake.push({x: i, y: 200});
	}
}

function snakeBody() {
	for (i = 0; i < snake.length; i++){
		context.fillStyle = "white";
		context.fillRect(snake[i].x * 20, snake[i].y, 18, 18);
	}
}
function game() {
	context.fillStyle = "black";
	context.fillRect(0, 0, innerWidth, innerHeight);
	snakeHead();
	snakeBody();
	var headX = snake[0].x;
	var headY = snake[0].y;
	
	snake.push({x:headX, y:headY});
	snake.shift();
	console.log('snake')

	headX++
	
	

}