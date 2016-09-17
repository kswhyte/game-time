const canvas = document.getElementById('jungle-canvas');
const ctx = canvas.getContext('2d');

const Jungle = require('./jungle');
var jungle = new Jungle(canvas.width, canvas.height);

var isRightKeyPressed = false;
var isLeftKeyPressed = false;

requestAnimationFrame(function gameLoop() {
  drawJungle(ctx);
  drawPapaya(ctx);
  drawPaddle(ctx);
  keysMovePaddle();
  jungle.detectJungleBoundaries();
  requestAnimationFrame(gameLoop);

});

// function drawGame = function(ctx) {
//   this.draw(ctx);
//   this.papaya.draw(ctx);
// }

function drawJungle(ctx) {
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffefd5";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawPapaya(ctx) {
  ctx.beginPath();
  ctx.arc(jungle.papaya.x, jungle.papaya.y, jungle.papaya.papayaRadius, 0, Math.PI*2);
  ctx.fillStyle = '#FF8243';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function drawPaddle(ctx) {
  ctx.beginPath();
  ctx.rect(jungle.paddle.x, jungle.paddle.y, jungle.paddle.width, jungle.paddle.height);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
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


// jungle.makeLevel1()
// if (jungle.done()) {
//   jungle.makeLevel2()
// }
