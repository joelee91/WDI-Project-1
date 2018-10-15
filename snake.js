var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var snake = [];
var xVelocity = 0;
var yVelocity = 0;
var width = 20;
var height = 20;
var tail = 4

function snakeBody() {
	for (var i = tail; i > 0; i--){
		snake.push({x:i, y:200})
	}
}

function snakePaint() {
	for (var j = 0; j < snake.length; j++){
		context.fillRect(snake[j].x * 22, snake[j].y, width, height)
		
	}
}

function game() {

}
snakeBody();
snakePaint();