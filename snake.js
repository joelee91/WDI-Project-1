var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var x = 300;
var y = 200;
var width = 10;
var height = 10;


class DrawSnake {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
		context.beginPath();
		context.fillRect(this.x, this.y, this.width, this.height);                
		context.stroke();
        }

        moveLeft() {
            this.x -= 10
            context.beginPath();
            context.fillRect(this.x, this.y, this.width, this.height);
			context.stroke();
		}
		
		moveRight() {
			this.x += 10
            context.beginPath();
            context.fillRect(this.x, this.y, this.width, this.height);
            context.stroke();
		}

		moveUp() {
			this.y -= 10
            context.beginPath();
            context.fillRect(this.x, this.y, this.width, this.height);
            context.stroke();
		}

		moveDown() {
			this.y += 10
            context.beginPath();
            context.fillRect(this.x, this.y, this.width, this.height);
			context.stroke();
		}
}

var snake = new DrawSnake (x, y, width, height);


document.addEventListener('keydown', function(event){
    if (event.keyCode === 37) {
		context.clearRect(0, 0, innerWidth, innerHeight);
		snake.moveLeft();
		// animate();
	} else if (event.keyCode === 38) {
		context.clearRect(0, 0, innerWidth, innerHeight);
		snake.moveUp();
	} else if (event.keyCode === 39) {
		context.clearRect(0, 0, innerWidth, innerHeight);
		snake.moveRight();
	} else if (event.keyCode === 40) {
		context.clearRect(0, 0, innerWidth, innerHeight);
		snake.moveDown();
	}
})

class DrawFood {
	constructor (x, y, radius, beginAngle, endAngle, counterClockWise) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.beginAngle = beginAngle;
		this.endAngle = endAngle;
		this.counterClockWise = counterClockWise;
		context.beginPath();
		context.arc(this.x, this.y, this.radius, this.beginAngle, this.endAngle, this.counterClockWise)
	}
	
	
}











// function animate() {
// 	requestAnimationFrame(animate);
// 	var snake = new DrawSnake (x, y, width, height);
// 	x-=1
// }







// var snake = new DrawSnake(x, y, 10, 10);
// switch(keycode) {
//         case 37:

// }


// function animate() {
//         requestAnimationFrame(animate);
//         draw.clearRect(0, 0, innerWidth, innerHeight)

//         snake.addEventListener('keydown', function(event) {
//                 event.preventDefault;
//                 if (event.code == '38') {
//                         y += 1;
//                 }
//         })
// }
// animate();

