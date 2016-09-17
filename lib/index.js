const canvas = document.getElementById('jungle-canvas');
const ctx = canvas.getContext('2d');

const Jungle = require('./jungle');
var jungle = new Jungle(canvas.width, canvas.height);

requestAnimationFrame(function gameLoop() {
  drawJungle(ctx);
  drawPapaya(ctx);
  drawPaddle(ctx);
  // jungle.detectJungleBoundaries();
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


window.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    // options.leftPressed = true;
    jungle.leftArrowPressed();
  } else if (e.keyCode === 39) {
    // options.rightPressed = true;
    jungle.rightArrowPressed();
  }
});

window.addEventListener('keyup', function keyUpHandler(e) {
    if(e.keyCode === 39) {
      // options.rightPressed = false;
    }
    else if(e.keyCode === 37) {
      // options.leftPressed = false;
    }
});


// jungle.makeLevel1()
// if (jungle.done()) {
//   jungle.makeLevel2()
// }
