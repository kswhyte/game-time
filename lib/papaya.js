function Papaya (jungleWidth, jungleHeight) {
  this.width = 15;
  this.height = 15;
  this.x = (jungleWidth - this.width) / 2;
  this.y = jungleHeight - (4 * this.height);
  this.speedX = 4;
  this.speedY = -4;
  this.jungleHeight = jungleHeight;
}

Papaya.prototype.isCollidingIntoTopOf = function(dingus) {
  return (this.x + this.width > dingus.x &&
  this.x < dingus.x + dingus.width &&
  this.height + this.y > dingus.y &&
  this.y < dingus.y);
};

Papaya.prototype.isCollidingIntoRightOf = function(dingus) {
  return (this.x < dingus.x + dingus.width &&
  this.x + this.width > dingus.x + dingus.width &&
  this.y < dingus.y + dingus.height &&
  this.y + this.height > dingus.y);
};

Papaya.prototype.isCollidingIntoBottomOf = function(dingus) {
  return (this.x + this.width > dingus.x &&
  this.x < dingus.x + dingus.width &&
  this.y < dingus.y + dingus.height &&
  this.y + this.height > dingus.y + dingus.height);
};

Papaya.prototype.isCollidingIntoLeftOf = function(dingus) {
  return (this.x + this.width > dingus.x &&
  this.x < dingus.x &&
  this.y < dingus.y + dingus.height &&
  this.y + this.height > dingus.y);
};

Papaya.prototype.entersVoid = function() {
  return (this.y > this.jungleHeight);
};

Papaya.prototype.leftWhippage = function() {
  this.speedX = this.speedX * 0.9;
};

Papaya.prototype.rightWhippage = function() {
  this.speedX = this.speedX * 0.9;
};

Papaya.prototype.centerWhippage = function() {
  this.speedX = this.speedX * 1.1;
};


module.exports = Papaya;
