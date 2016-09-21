var $ = require ('jquery');

const canvas = document.getElementById('jungle-canvas');
const ctx = canvas.getContext('2d');

const Jungle = require('./jungle');
var jungle = new Jungle(canvas.width, canvas.height);

var isRightKeyPressed = false;
var isLeftKeyPressed = false;

drawBlocks(ctx);

$(document).ready(function() {
  // var welcomeToTheJungle = new Audio();
  // welcomeToTheJungle.src = ('../audio/guns-n-roses_welcome-to-the-jungle.mid');
  // welcomeToTheJungle.play();
  drawTitleScreen(ctx);
});

$(document).on('keydown', function(e) {
  if (e.keyCode === 32) {
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
      jungle.detectBlocks();
      jungle.renderLevel();
      ///call function that does if else of lose or win state of jungle
      if (jungle.papaya.entersVoid()) {
        //check lives
          //if there are lives
            //update lives (--)
            //reset paddle and papaya, not blocks
              // jungle.papaya.x = 100;
              // jungle.papaya.y = 100;
          harvestFreshPapaya();

          //else
            //run function, you lose
      } else {
        requestAnimationFrame(gameLoop);
      }
    });
      // }, 3000);
  }
});

function harvestFreshPapaya() {
  jungle.papaya.x = (canvas.width - jungle.papaya.width) / 2;
  jungle.papaya.y = canvas.height - (4 * jungle.papaya.height);
  jungle.papaya.speedX = 4;
  jungle.papaya.speedY = -4;
}

function drawTitleScreen(ctx) {
  ctx.fillStyle = 'rgb(255, 77, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText("To Play, Hit SpaceBar", 155, 250);  // ctx.fill();
}

function drawBlocks() {
  jungle.formBlockRow1();
  jungle.formBlockRow2();
  jungle.formBlockRow3();
}

function drawBlockRows(ctx) {
  var level = jungle.level;
  level.forEach(function(block) {
    ctx.fillStyle = "#fe5b00";
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
}

function drawJungle(ctx) {
  ctx.fillStyle = "#ffefd5";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPapaya(ctx) {
  ctx.fillStyle = '#FF8243';
  ctx.fillRect(jungle.papaya.x, jungle.papaya.y, jungle.papaya.width, jungle.papaya.height);
}

function drawPaddle(ctx) {
  ctx.fillStyle = "black";
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
