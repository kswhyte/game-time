function Papaya (jungleWidth, jungleHeight) {
  this.width = 10;
  this.height = 10;
  this.x = (jungleWidth - this.width) / 2;
  this.y = jungleHeight - (4 * this.height);
  this.speedX = 5;
  this.speedY = -5;
}

Papaya.prototype.isCollidingIntoTopOf = function(dingus) {
  // debugger;
  return (this.x + this.width > dingus.x &&
  this.x < dingus.x + dingus.width &&
  this.height + this.y > dingus.y &&
  this.y < dingus.y + dingus.height);
};

Papaya.prototype.isCollidingIntoBottomOf = function(dingus) {
  // debugger;
  return (this.x + this.width > dingus.x &&
  this.x < dingus.x + dingus.width &&
  this.y > dingus.y + dingus.height &&
  this.y < dingus.y);
};

// Papaya.prototype.isCollidingIntoRightOf = function(dingus) {
//   // debugger;
//   return (this.x + this.width > dingus.x &&
//   this.x < dingus.x + dingus.width &&
//   this.y > dingus.y + dingus.height &&
//   this.y < dingus.y);
// };

// Papaya.prototype.isCollidingIntoLeftOf = function(dingus) {
//   // debugger;
//   return (this.x + this.width > dingus.x &&
//   this.x < dingus.x + dingus.width &&
//   this.y > dingus.y + dingus.height &&
//   this.y < dingus.y);
// };



// var img = new Image()
// img.src = 'something';
  // drawImage(img, x y w h)


module.exports = Papaya;
