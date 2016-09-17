function Paddle(jungleWidth, jungleHeight) {
  this.width = 100;
  this.height = 20;
  this.x = (jungleWidth / 2) - (this.width / 2);
  this.y = jungleHeight - this.height;

}

Paddle.prototype.moveLeft = function() {
  this.x -= 15;
};

Paddle.prototype.moveRight = function() {
  this.x += 15;
};

module.exports = Paddle;
