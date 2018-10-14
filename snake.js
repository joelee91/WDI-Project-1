var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var snake = [];

function snakeBody() {
	for (i = 0; i < 3; i++) {
		context.fillRect(i*100, i*100, 100, 100)
		context.stroke();
	}
}

snakeBody();