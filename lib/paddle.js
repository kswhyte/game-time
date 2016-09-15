function Paddle(x, y, width, height) {
  this.x = x || 330;
  this.y = y || 488;
  this.width = width || 100;
  this.height = height || 10;
}

Paddle.prototype.moveRight = function() {
  this.x++;
  return this;
};

Paddle.prototype.moveLeft = function() {
  this.x--;
  return this;
};

module.exports = Paddle;
