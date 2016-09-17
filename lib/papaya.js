function Papaya (jungleWidth, jungleHeight) {
  this.x = 100 || (jungleWidth - this.papayaRadius) / 2;
  this.y = 250|| jungleHeight - this.papayaRadius;
  this.papayaRadius = 10;
  this.speedX = 4;
  this.speedY = -4;
}


// var img = new Image()
// img.src = 'something';
  // drawImage(img, x y w h)


module.exports = Papaya;
