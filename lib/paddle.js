function Paddle(options) {
  this.options = options || {};
  this.x = 330;
  this.y = 488;
  this.width = this.options.width || 100;
  this.height = this.options.height || 10;
  this.dx = 5;
  this.color = this.options.color || "black";
  //how can we bring in the canvas size to use those dimensions to set paddle x and y, i.e (x = canvas.width = paddle.width / 2)
}

Paddle.prototype.moveLeft = function() {
  this.x = this.x - 15;
  return this;
};

Paddle.prototype.moveRight = function() {
  this.x = this.x + 15;
  return this;
  //do we need to return this
};

Paddle.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

module.exports = Paddle;
