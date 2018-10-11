// PSEUDOCODE

// 1. START FRONT PAGE BEFORE GAME BEGINS
//         1. 2 buttons (Start button, , How To Play)
//                 - Start button will have difficulties
//                 - difficulties include (easy, medium, hard, reverse)
//                  - How to play will display an alert with instructions
//         2. Will be centered on page with flexbox
// 2. STRUCTURE OF STAGE 
//         1. Canvas object
//                 - Rectangular shape (More width than height in pixels)
//                 - Solid borders (that snake can't pass through)
// 3. STRUCTURE OF FOOD 
//         1. Canvas object
//                 - Create a square
//                 - Randomized around stage using Math.random placements
// 4. STRUCTURE OF SNAKE 
//         1. Canvas object
//                 - Create a row of 3 squares (using array)  
//                 - square moves using event listeners (arrow keys)
//                 - square makes contact with food, grows
//                         - use if statement (if any border of snake is placed on top of food border)
//                                 - then (push square onto snake array)
//                 - If square element moves outside stage border == function (stop game function)
// 5. END GAME 
//         1. Function that displays alert (on losing)
//                 - If stop game function occurs
//                 - then display alert with text (Loser, try again)
//                 - display will contain button (start again)
//         2. Function that displays alert (on winning)
//                 - If snake object fills entirety of stage canvas object
//                 - display alert function with text (Winner)
//                 - display will contain button (start again)

Canvas Notes 

https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes


        //(x, y, width, height)
        //The x and y values measure from the origin of canvas grid where shape will be (top left of grid = origin)
        //Width and height measure the amount of pixels the shape will be
1. Use strokeRect(x, y, width, height) function to draw rectangular outline 
2. Use fillRect() function to color the inside of rectangle 
3. beginPath(), closePath(), moveTo(), arc() -- to draw shapes accordingly
4. 