// var papayaRightSide =

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
  //-right-pap(X) > -left-dingus(X)
  return (this.x + this.width > dingus.x &&
    //-left-pap(X) < -right-dingus(X)
  this.x < dingus.x + dingus.width &&
  //bottom--pap(Y) > top--dingus(Y)
  this.height + this.y > dingus.y &&
  //top-pap < top-dingus
  this.y < dingus.y);
};

Papaya.prototype.isCollidingIntoRightOf = function(dingus) {
  //-left-pap(X) < -right-dingus(X)
  return (this.x < dingus.x + dingus.width &&
  //right-papaya(X) > right-dingus(X)
  this.x + this.width > dingus.x + dingus.width &&
  //top--pap(Y) < bottom--dingus(Y)
  this.y < dingus.y + dingus.height &&
  //bottom-pap(Y) > top-dingus(Y)
  this.y + this.height > dingus.y);
};

Papaya.prototype.isCollidingIntoBottomOf = function(dingus) {
  //-right-pap(X) > -left-dingus(X)
  return (this.x + this.width > dingus.x &&
  //-left-pap(X) < -right-dingus(X)
  this.x < dingus.x + dingus.width &&
  //top--pap(Y) < bottom--dingus(Y)
  this.y < dingus.y + dingus.height &&
  //bottom-pap(Y) > bottom--dingus(Y)
  this.y + this.height > dingus.y + dingus.height);
};

Papaya.prototype.isCollidingIntoLeftOf = function(dingus) {
  //-right-pap(X) > -left-dingus(X)
  return (this.x + this.width > dingus.x &&
  //left-papaya(X) < left-dingus(X)
  this.x < dingus.x &&
  //top--pap(Y) > bottom--dingus(Y)
  this.y < dingus.y + dingus.height &&
  //bottom-pap(Y) > top-dingus(Y)
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
