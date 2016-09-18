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
  drawBlocks(ctx);
  keysMovePaddle();
  jungle.detectJungleBoundaries();
  // jungle.detectBlockCollisionRow1();
  requestAnimationFrame(gameLoop);
});

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
  ctx.rect(jungle.papaya.x, jungle.papaya.y, jungle.papaya.width, jungle.papaya.height);
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

function drawBlocks(ctx) {
  jungle.formBlockRow1();
  jungle.formBlockRow2();
  jungle.formBlockRow3();
  createLevel(ctx);
}

function createLevel(ctx) {
  var level = [];
  level.push(jungle.blockRow1, jungle.blockRow2, jungle.blockRow3);
  drawBlockRows(level, ctx);
}

function drawBlockRows(level, ctx) {
  level.forEach(function(row) {
      row.forEach(function(block) {
        ctx.beginPath();
        ctx.rect(block.x, block.y, block.width, block.height);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
      });
  });
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
