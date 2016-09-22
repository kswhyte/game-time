var $ = require ('jquery');

const canvas = document.getElementById('jungle-canvas');
const ctx = canvas.getContext('2d');

const Jungle = require('./jungle');
var jungle = new Jungle(canvas.width, canvas.height);

var isRightKeyPressed = false;
var isLeftKeyPressed = false;
var gameIsRunning = false;
var difficultyLevel = 1;
var sparePapayaCount = $('.papaya-count');

jungle.generateRowsBasedOnLevel(difficultyLevel);

$(document).ready(function() {
  var welcomeToTheJungle = new Audio();
  welcomeToTheJungle.src = ('../audio/guns-n-roses_welcome-to-the-jungle.mp3');
  welcomeToTheJungle.play();
  drawStartScreen(ctx);
});

$(document).on('keydown', function(e) {
  if (e.keyCode === 32 && gameIsRunning === false) {
    sparePapayaCount.text(jungle.sparePapayas);
    requestAnimationFrame(function gameLoop() {
      gameIsRunning = true;
      drawJungle(ctx);
      drawBlockRows(ctx);
      drawPapaya(ctx);
      drawPaddle(ctx);
      keysMovePaddle();
      jungle.launchPapaya();
      jungle.detectJungleBoundaries();
      jungle.detectBlocks();
      jungle.updateBlockSetup();
      jungle.detectPaddle(jungle.paddle);

      var activeBlocks = jungle.blockSetup.filter(function(block) {
        return block.status;
      });

      if (jungle.papaya.entersVoid()) {
        gameIsRunning = false;
        updateJungleState();
      } else if (activeBlocks.length === 0){
        gameIsRunning = false;
        jungle.blockSetup = [];
        drawWinScreen(ctx);
        upLevel();
        appendGameWinBonus();
      } else {
        requestAnimationFrame(gameLoop);
      }
    });
  }
});

function updateJungleState() {
  if (jungle.sparePapayas > 0) {
    jungle.sparePapayas -= 1;
    sparePapayaCount.text(jungle.sparePapayas);
    jungle.harvestFreshPapaya();
    jungle.resetPaddle();
    checkCurrentDifficulty();
    drawLoseLifeScreen(ctx);
  } else {
    sparePapayaCount.text(jungle.sparePapayas);
    drawGameOverScreen(ctx);
    resetJungleAfterGameOver();
  }
}

function checkCurrentDifficulty() {
  if (difficultyLevel > 1) {
    jungle.increasePapayaSpeed();
    jungle.increasePaddleSpeed();
  }
}

function resetJungleAfterGameOver() {
  jungle = new Jungle(canvas.width, canvas.height);
  difficultyLevel = 1;
  jungle.generateRowsBasedOnLevel(difficultyLevel);
}

function upLevel() {
  jungle = new Jungle(canvas.width, canvas.height);
  difficultyLevel += 1;
  jungle.generateRowsBasedOnLevel(difficultyLevel);
  jungle.increasePapayaSpeed();
  jungle.increasePaddleSpeed();
}

function appendGameWinBonus() {
  if (difficultyLevel === 4 && gameIsRunning === false) {
    $('.bonus').append(`
      <div><a href='http://www.helloashleymorgan.com/smoothie-sunday-papayawhip/' target='_blank'>Claim Bonus!</a></div>
      `);
  }
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

function drawJungle(ctx) {
  ctx.fillStyle = '#ffefd5';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBlockRows(ctx) {
  var blockSetup = jungle.blockSetup;
  blockSetup.forEach(function(block) {
    ctx.fillStyle = '#fe5b00';
    ctx.fillRect(block.x, block.y, block.width, block.height);
  });
}

function drawPapaya(ctx) {
  var papayaImage = new Image();
  papayaImage.src = require('../images/papaya-icon2.png');
  ctx.drawImage(papayaImage, jungle.papaya.x, jungle.papaya.y, jungle.papaya.height, jungle.papaya.width);
}

function drawPaddle(ctx) {
  ctx.fillStyle = 'black';
  ctx.fillRect(jungle.paddle.x, jungle.paddle.y, jungle.paddle.width, jungle.paddle.height);
}


function drawStartScreen(ctx) {
  ctx.fillStyle = 'rgb(255, 77, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = '#fe5b00';
  ctx.fillText("Break All the Blocks.", 240, 110);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText("To Play, Hit SpaceBar", 165, 190);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'grey';
  ctx.fillText("Control the Paddle with...", 215, 270);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = '#EA3556';
  ctx.fillText("LeftKey & RightKey", 245, 350);
  ctx.font = '20px Oswald, sans-serif';
  ctx.fillStyle = '#EA3556';
  ctx.fillText("Use Different Sides of the Paddle to Add Some English, Johnny!", 120, 390);
}

function drawLoseLifeScreen(ctx) {
  ctx.fillStyle = '#EA3556';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText('Shit! You Have Lost a Papaya.', 180, 210);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Hit SpaceBar to Continue Whippin!', 45, 290);
}

function drawGameOverScreen(ctx) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('No mas Papayas!!!', 250, 145);
  ctx.font = '60px Bungee Inline, sans-serif';
  ctx.fillStyle = 'red';
  ctx.fillText('GAME OVER', 175, 270);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'grey';
  ctx.fillText('Hit SpaceBar to Play Again', 110, 345);
}

function drawWinScreen(ctx) {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'yellow';
  ctx.fillText('Phenomenal Whippin!!!', 225, 140);
  ctx.font = '30px Bungee Inline, sans-serif';
  ctx.fillStyle = 'white';
  ctx.fillText('You Deserve Some Papaya Whip.', 80, 210);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = 'grey';
  ctx.fillText('Hit SpaceBar to Play Again...', 200, 280);
  ctx.font = '30px Oswald, sans-serif';
  ctx.fillStyle = '#EA3556';
  ctx.fillText('With a Greater Difficulty', 215, 340);
}
