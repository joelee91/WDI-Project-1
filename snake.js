var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var button = document.querySelector('button');
var interval;

function start() {
	button.addEventListener('click', function(){
		button.style.opacity = 0;
		interval = setInterval(game, 40);
	})
}
function end() {
	button.style.opacity = 1;
	location.reload(true);
}


var playerX = 20;
var playerY = 20;
var tail = [];
var length = 4
var appleX = 25;
var appleY = 25;
var direction;

function appleRandom() {
	appleX = Math.floor(Math.random() * 50);
	appleY = Math.floor(Math.random() * 30);
}
function apple() {
	if(appleX == playerX && appleY == playerY) {
		length++;
		appleRandom();
	}
	context.fillStyle="red";
	context.fillRect(appleX * 20, appleY * 20, 19, 19);
}
function draw() {
	context.fillStyle = "black";
	context.fillRect(0, 0, innerWidth, innerHeight);

	context.fillStyle="white";
	for(var i = 0;i < tail.length; i++) {
		context.fillRect(tail[i].x * 20,tail[i].y * 20, 19, 19);
	}
	tail.push({x:playerX, y:playerY});
	while(tail.length > length) {
	tail.shift();
	}
}

function game() {
	console.log(playerX, playerY)
	draw();
	if (direction === "left") {
		playerX -= 1;
		// console.log('snake')
	}else if (direction === "up"){
		playerY -= 1 ;
		// console.log('snake')
	}else if (direction === "right"){
		playerX += 1;
		// console.log('snake')
	}else if (direction === "down"){
		playerY += 1;
	}
	if (playerX > 65 || playerX < 0 || playerY < 0 || playerY > 32){
		console.log('snake')
		end();
	}
	if (length > 20) {
		end();
	}
	apple();
}

document.addEventListener("keydown", direction) ;
	function direction(event) {
		var arrow = event.keyCode;
		if (arrow == 37 && direction != "right"){
			direction = "left";
			// console.log('snake')
		}else if (arrow == 38 && direction != "down"){
			direction = "up";
		}else if (arrow == 39 && direction != "left"){
			direction = "right";
		}else if (arrow == 40 && direction != "up"){
			direction = "down";
		}
	}
start();