//add feature of reseting game with new difficulty when the player wins (no more blocks are in the level)
  //add more rows and faster speed of papaya with new jungle
//draw papaya on screen to show lives (#of papayas left)

var $ = require ('jquery');

const canvas = document.getElementById('jungle-canvas');
const ctx = canvas.getContext('2d');

const Jungle = require('./jungle');
var jungle = new Jungle(canvas.width, canvas.height);

var isRightKeyPressed = false;
var isLeftKeyPressed = false;
var gameIsRunning = false;
var level = 1;
var sparePapayaCount = $('.papaya-count');

jungle.generateRowsBasedOnLevel(level);

$(document).ready(function() {
  var welcomeToTheJungle = new Audio();
  welcomeToTheJungle.src = ('../audio/guns-n-roses_welcome-to-the-jungle.mid');
  welcomeToTheJungle.play();
  drawStartScreen(ctx);
});

$(document).on('keydown', function(e) {
  if (e.keyCode === 32 && gameIsRunning === false) {
    requestAnimationFrame(function gameLoop() {
      gameIsRunning = true;
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

      var activeBlocks = jungle.level.filter(function(block) {
        return block.status;
      });

      if (jungle.papaya.entersVoid()) {
        gameIsRunning = false;
        checkJungleState();
      } else if (activeBlocks.length === 0){
        gameIsRunning = false;
        jungle.level = [];
        // resetJungleAfterWin();
        drawWinScreen(ctx);
        upLevel();
        // requestAnimationFrame(gameLoop);
      } else {
        requestAnimationFrame(gameLoop);
      }
    });
  }
});

function resetJungleAfterLoss() {
  jungle = new Jungle(canvas.width, canvas.height);
  level = 1;
  jungle.generateRowsBasedOnLevel(level);
}

// function resetJungleAfterWin() {
//   jungle = new Jungle(canvas.width, canvas.height);
//   level = 1;
//   jungle.generateRowsBasedOnLevel(level);
// }

function upLevel() {
  jungle = new Jungle(canvas.width, canvas.height);
  level += 1;
  jungle.generateRowsBasedOnLevel(level);
  jungle.increasePapayaSpeed();
  jungle.increasePaddleSpeed();
}

function checkJungleState() {
  if (jungle.sparePapayas > 0) {
    jungle.sparePapayas -= 1;
    sparePapayaCount.text(jungle.sparePapayas);
    jungle.harvestFreshPapaya();
    jungle.resetPaddle();
    checkCurrentLevel();
    drawLoseLifeScreen(ctx);
  } else {
    drawLoseGameScreen(ctx);
    resetJungleAfterLoss();
  }
}

function checkCurrentLevel() {
  if (level > 1) {
    jungle.increasePapayaSpeed();
    jungle.increasePaddleSpeed();
  }
}

function drawStartScreen(ctx) {
  ctx.fillStyle = 'rgb(255, 77, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = '#fe5b00';
  ctx.fillText("Break All the Blocks.", 243, 140);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText("To Play, Hit SpaceBar", 170, 220);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'grey';
  ctx.fillText("Control the Paddle with...", 210, 300);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = '#EA3556';
  ctx.fillText("LeftKey & RightKey", 240, 350);
}

function drawLoseLifeScreen(ctx) {
  ctx.fillStyle = '#EA3556';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText('Shit! You Have Lost a Papaya!!', 180, 210);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Hit SpaceBar to Continue Whippin', 45, 280);
}

function drawLoseGameScreen(ctx) {
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
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Phenomenal Whippin!!!', 225, 140);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'yellow';
  ctx.fillText('You Now Have Delicious Papaya Whip!', 30, 210);
  //somehow add picture and link to papaya whiip and recipe
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Hit SpaceBar to Play Again...', 200, 280);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = '#EA3556';
  ctx.fillText('With a Greater Difficulty', 215, 340);
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
