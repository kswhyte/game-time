var options;

function Paddle(options) {
  this.options = options;
}

Paddle.prototype.moveLeft = function() {
  this.options.x = this.options.x - 15;
  return this;
};

Paddle.prototype.moveRight = function() {
  this.options.x = this.options.x + 15;
  return this;
  //do we need to return this
};

Paddle.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.rect(this.options.paddleX, this.options.canvas.height-this.options.paddleHeight, this.options.paddleWidth, this.options.paddleHeight);
  ctx.fillStyle = this.options.paddleColor;
  ctx.fill();
  ctx.closePath();
};

module.exports = Paddle;
