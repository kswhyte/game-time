// rumble in the jungle
const Jungle = require('./jungle');

const canvas = document.getElementById('jungle-canvas');
// all needs ctx
const ctx = canvas.getContext('2d');
var paddleWidthGlobal = 75;
var paddleXGlobal =(canvas.width-paddleWidthGlobal)/2;
var options = {
  // global
  canvas: canvas,
  ctx: ctx,
  rightPressed: false,
  leftPressed: false,
  //papaya variables
  papayaRadius: 10,
  x: canvas.width/2,
  y:canvas.height-30,
  speedX: 4,
  speedY: -4,
  papayaColor: "#FF8243",
  //paddle variables
  paddleHeight: 10,
  paddleWidth: paddleWidthGlobal,
  paddleX: paddleXGlobal,
  paddleColor: "#0095DD"
};

var jungle = new Jungle(options);

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  jungle.draw();
  //detectCollisionPoints();
  requestAnimationFrame(gameLoop);
});



// function detectCollisionPoints() {
//   jungle.launchPapaya();
//   jungle.papaya.detectPaddle();
// }


//
// function drawPapaya() {
//   ctx.beginPath();
//   ctx.fillStyle = "red";
//   ctx.fill();
//   ctx.stroke();
//   ctx.closePath();
//   this.x += dx;
//   this.y += dy;
// };

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    options.leftPressed = true;
    jungle.leftArrowPressed();
  } else if (e.keyCode === 39) {
    options.rightPressed = true;
    jungle.rightArrowPressed();
  }
});

window.addEventListener('keyup', function keyUpHandler(e) {
    if(e.keyCode === 39) {
      options.rightPressed = false;
    }
    else if(e.keyCode === 37) {
        options.leftPressed = false;
    }
});



//more dynamic paddle controls if time
// window.addEventListener('keyup', function(e) {
//   if (e.keyCode === 37) {
//     jungle.leftArrowPressed();
//   } else if (e.keyCode === 39) {
//     jungle.rightArrowPressed();
//   }
// });

// window.addEventListener('keydown', function(e) {
//
//
//   }
// });



// jungle.makeLevel1()
// if (jungle.done()) {
//   jungle.makeLevel2()
// }
// jungle.draw();
//
// Jungle.prototype.draw = function() {
//
//   this.ctx
// };
