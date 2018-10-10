// PSEUDOCODE

// 1. START FRONT PAGE BEFORE GAME BEGINS
//         1. 3 buttons (Start button, ScoreBoard, Options)
//                 - Start button will have difficulties
//                 - difficulties include (easy, medium, hard, reverse)
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

1. 