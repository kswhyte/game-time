var $ = require ('jquery');

const canvas = document.getElementById('jungle-canvas');
const ctx = canvas.getContext('2d');

const Jungle = require('./jungle');
var jungle = new Jungle(canvas.width, canvas.height);

var isRightKeyPressed = false;
var isLeftKeyPressed = false;

drawBlocks(ctx);

$(document).ready(function() {
  var welcomeToTheJungle = new Audio();
  welcomeToTheJungle.src = ('../audio/guns-n-roses_welcome-to-the-jungle.mp3');
  welcomeToTheJungle.play();
  drawStartScreen(ctx);
});

$(document).on('keydown', function(e) {
  if (e.keyCode === 32) {
    //add variable (isGameStopped) that tells you game is running
      //if it is not running (true)
        //go into loop

      //set running to true inside loop
      //when you die, set it to false


    //initialize new game with init function
      //if/-- which resets game before looping if you have just lost

    // setTimeout(function(){
    requestAnimationFrame(function gameLoop() {
      drawJungle(ctx);
      drawPapaya(ctx);
      drawPaddle(ctx);
      keysMovePaddle();
      drawBlockRows(ctx);
      jungle.launchPapaya();
      jungle.detectJungleBoundaries();
      jungle.detectPaddle(jungle.paddle);
      //have check blocks in level array
        //if it is empty (arr.lenght === 0)
          //draw win screen
      jungle.detectBlocks();
      jungle.renderLevel();

      if (jungle.papaya.entersVoid()) {
        checkJungleState(ctx);
      } else {
        requestAnimationFrame(gameLoop);
      }
    });
      // }, 3000);
  }
});

// function init() {
// }

function checkJungleState(ctx) {
  if (jungle.papayas > 0) {
    jungle.papayas -= 1;
    harvestFreshPapaya();
    resetPaddle();
    drawLoseLifeScreen(ctx);
  } else {
    drawLoseScreen(ctx);
  }
}


function harvestFreshPapaya() {
  jungle.papaya.x = (canvas.width - jungle.papaya.width) / 2;
  jungle.papaya.y = canvas.height - (4 * jungle.papaya.height);
  jungle.papaya.speedX = 4;
  jungle.papaya.speedY = -4;
}

function resetPaddle() {
  this.x = (canvas.width / 2) - (jungle.paddle.width / 2);
  this.y = canvas.height - jungle.paddle.height;
}

function drawStartScreen(ctx) {
  ctx.fillStyle = 'rgb(255, 77, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText("To Play, Hit SpaceBar", 160, 250);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText("To Play, Hit SpaceBar", 160, 250);
}

function drawLoseLifeScreen(ctx) {
  ctx.fillStyle = '#EA3556';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText('You Have Lost a Papaya!', 145, 210);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Hit SpaceBar to Continue Whippin', 45, 280);
}

function drawLoseScreen(ctx) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('No mas Papayas!', 210, 210);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'grey';
  ctx.fillText('Hit SpaceBar to Play Again', 110, 280);
}

function drawWinScreen(ctx) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Phenomenal Whippin!!!', 210, 140);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'yellow';
  ctx.fillText('You Now Have Delicious Papaya Whip!', 110, 210);
  //somehow add picture and link to papaya whiip and recipe
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'grey';
  ctx.fillText('Hit SpaceBar to Play Again', 110, 280);
}

function drawBlocks() {
  jungle.formBlockRow1();
  jungle.formBlockRow2();
  jungle.formBlockRow3();
}

function drawBlockRows(ctx) {
  var level = jungle.level;
  level.forEach(function(block) {
    ctx.fillStyle = '#fe5b00';
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
}

function drawJungle(ctx) {
  ctx.fillStyle = '#ffefd5';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPapaya(ctx) {
  ctx.fillStyle = '#FF8243';
  ctx.fillRect(jungle.papaya.x, jungle.papaya.y, jungle.papaya.width, jungle.papaya.height);
}

function drawPaddle(ctx) {
  ctx.fillStyle = 'black';
  ctx.fillRect(jungle.paddle.x, jungle.paddle.y, jungle.paddle.width, jungle.paddle.height);
}

document.addEventListener('keydown', keyDownToggle, false);
document.addEventListener('keyup', keyUpToggle, false);

function keyDownToggle(e) {
  if (e.keyCode === 37) {
    isLeftKeyPressed = true;
  } else if (e.keyCode === 39) {
    isRightKeyPressed = true;
  }
}

function keyUpToggle(e) {
  if(e.keyCode === 37) {
    isLeftKeyPressed = false;
  }
  else if(e.keyCode === 39) {
    isRightKeyPressed = false;
  }
}

function keysMovePaddle() {
  if(isRightKeyPressed && jungle.paddle.x < jungle.width - jungle.paddle.width) {
    jungle.paddle.moveRight();
  } else if (isLeftKeyPressed && jungle.paddle.x > 0) {
    jungle.paddle.moveLeft();
  }
}
