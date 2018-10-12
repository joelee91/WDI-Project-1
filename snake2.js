var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var snakeBody = [
	{x: 100, y: 100},
	{x: 111, y: 100},
	{x: 122, y: 100}
]


function body() {
	for (var i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i].x, snakeBody[i].y, 10, 10)
	}
}

function moveLeft() {
	document.addEventListener ('keydown', function(event){
		if (event.keyCode === 37) {
			for (i = snakeBody[0].x; i >= 0; i-10){
				snakeBody.splice(snakeBody.length-1, 1)
				snakeBody.unshift(body())
			}
		}
	})
}
body();
moveLeft();
