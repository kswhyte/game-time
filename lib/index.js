// this file is responsible for finding the canvas
//animation, loops, keypresses go here + event listeners
//pull in objects wiht require

// require('./styles.css');
// var makeGame = require('./papaya.js');

const canvas = document.getElementById('jungle-canvas');
const ctx = canvas.getContext('2d');

var Jungle = require('./jungle');
var jungle = new Jungle();

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  requestAnimationFrame(gameLoop);
});

function draw(){
  jungle.paddle.draw(ctx);
  jungle.papaya.draw(ctx);
  jungle.papaya.move(ctx);
  // drawPapaya();
};


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
    jungle.leftArrowPressed();
  } else if (e.keyCode === 39) {
    jungle.rightArrowPressed();
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
