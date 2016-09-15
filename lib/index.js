// this file is responsible for finding the canvas
//animation, loops, keypresses go here + event listeners
//pull in objects wiht require

require('./styles.css');
// var makeGame = require('./papaya.js');

const canvas = document.getElementById('jungle-canvas');
const ctx = canvas.getContext('2d');

var Paddle = require('./paddle');
var paddle = new Paddle();
var Jungle = require('./jungle');
var jungle = new Jungle();

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  jungle.paddle.draw(ctx);
  requestAnimationFrame(gameLoop);
});

Paddle.prototype.draw = function (ctx) {
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.stroke();
};

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 37) {
    jungle.paddle.moveLeft();
  }
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 39) {
    jungle.paddle.moveRight();
  }
});



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
