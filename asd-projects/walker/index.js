/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,
  }
  
  // Game Item Objects
  
  var walker = {
    posX:  100,
    posY: 100,
    speedX: 0,
    speedY: 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown)
  $(document).on('keyup', handleKeyUp)

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker.speedX = -5
    } if (event.which === KEY.RIGHT) {
      walker.speedX = 5
      // SPEED Y 
    } if (event.which === KEY.DOWN) {
      walker.speedY = 5
    } if (event.which === KEY.UP) {
      walker.speedY = -5
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      walker.speedX = 0
    } else if (event.which === KEY.UP || event.which === KEY.DOWN) {
      walker.speedY = 0
    }
  }

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
 
  function newFrame() {
    wallCollision()
    repositionGameItem()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    walker.posX += walker.speedX
    walker.posY += walker.speedY
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.posX);
    $("#walker").css("top", walker.posY);
  }

  function wallCollision() {
    if (walker.posX >= $("#board").width() - 50) {
      walker.posX = $("#board").width() - 55
    } if (walker.posX <= 0) {
      walker.posX += 5
      // POSITION Y DOWN b-Low
    } if (walker.posY >= $("#board").height() - 50) {
      walker.posY = $("#board").height() - 55
    } if (walker.posY === 0) {
      walker.posY += 5
    }
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}