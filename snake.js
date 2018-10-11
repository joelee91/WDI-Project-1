var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

var x = 300;
var y = 200;

function DrawSnake (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        context.beginPath();
        context.fillRect(this.x, this.y, this.width, this.height);
        context.stroke();
        
}

var snake = new DrawSnake(x, y, 10, 10);
switch(keycode) {
        case 37:
        
}


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

