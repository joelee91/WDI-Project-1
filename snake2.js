var canvas = document.querySelector('canvas');

canvas.width = 660;
canvas.height = 440;

var context = canvas.getContext('2d');

var snakeBody = [
	{x: 330, y: 240},
	{x: 341, y: 240},
	{x: 352, y: 240}
]


function body() {
	for (var i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i].x, snakeBody[i].y, 10, 10)
	}
}

function moveLeft() {
	document.addEventListener ('keydown', function(event){
		if (event.keyCode === 37) {
			for (var t = snakeBody[0].x; t > 0; t-=11){
				// console.log("T", t)
				snakeBody.splice(snakeBody.length-1, 1)
				// console.log("SNAKEBODY SPLICE", snakeBody)
				snakeBody.unshift({x: t, y: 240})
				// console.log("SNAKEBODY UNSHIFT", snakeBody)
				// context.clearRect(0, 0, innerWidth, innerHeight)
				context.fillRect(t, 240, 10, 10);
				// console.log(t)
			}
		}
	})
}
body();
moveLeft();

// var canvas = document.querySelector('canvas');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var context = canvas.getContext('2d');

// var x;
// var y;
// var
// var snakeBody = [
// 	{x, y},
// 	{x, y},
// 	{x, y}
// ]


// function body() {
// 	for (var i = 0; i < snakeBody.length; i++) {
// 		context.fillRect(snakeBody[i].x, snakeBody[i].y, 10, 10)
// 	}
// }

// function moveLeft() {
// 	document.addEventListener ('keydown', function(event){
// 		if (event.keyCode === 37) {
// 			for (i = snakeBody[0].x; i >= 0; i-10){
// 				snakeBody.splice(snakeBody.length-1, 1)
// 				snakeBody.unshift(body())
// 			}
// 		}
// 	})
// }
// body();
// moveLeft();