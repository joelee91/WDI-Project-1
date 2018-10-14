var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setInterval(game, 100);


var snake = [];
var speed = [
	{x:speedX, y:speedY}
]
var speedX;
var speedY;
var positionX;
var positionY;
var snakeTail = 4;

class DrawSnake  {
	constructor(x, y, width, height){
		this.x = positionX;
		this.y = positionY
	}
}

