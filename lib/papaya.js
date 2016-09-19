function Papaya (jungleWidth, jungleHeight) {
  this.width = 10;
  this.height = 10;
  this.x = (jungleWidth - this.width) / 2;
  this.y = jungleHeight - (4 * this.height);
  this.speedX = 5;
  this.speedY = -5;
}

Papaya.prototype.isPapayaCollidingInto = function(dingus) {
  // debugger;
  return (this.x < dingus.x + dingus.width &&
  this.x + this.width > dingus.x &&
  this.y < dingus.y + dingus.height &&
  this.height + this.y > dingus.y);
};

// var img = new Image()
// img.src = 'something';
  // drawImage(img, x y w h)


module.exports = Papaya;
