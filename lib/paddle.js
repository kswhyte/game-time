function Paddle(jungleWidth, jungleHeight) {
  this.x = 400 || (jungleWidth / 2) - (this.width / 2);
  this.y = 200 || jungleHeight - this.height;
  this.width = 100;
  this.height = 20;
}

Paddle.prototype.moveLeft = function() {
  this.x -= 15;
};

Paddle.prototype.moveRight = function() {
  this.x += 15;
};

module.exports = Paddle;
