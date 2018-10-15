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
var appleX;
var appleY;
setInterval(snakePaint, 1000);

function snakeBody() {
	for (var i = tail; i > 0; i--){
		snake.push({x:i, y:200})
	}
}


function snakePaint() {
	for (var j = 0; j < snake.length; j++){
		context.fillRect(snake[j].x * 22, snake[j].y, width, height)
	}
	// context.fillStyle = ('white');
	// context.fillRect(0, 0, innerWidth, innerHeight);
	var headX = snake[0].x;
	var headY = snake[0].y;
	headX += xVelocity;
	headY += yVelocity;
	document.onkeydown = function (event) {
		switch (event.keyCode) {
			case 37:
				xVelocity--;
				break;
			case 38:
				yVelocity--;
				break;
			case 39:
				xVelocity++;
				break;
			case 40:
				yVelocity++;
				break;
			
		}
	}

}
snakeBody();
snakePaint();