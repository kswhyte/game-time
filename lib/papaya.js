function Papaya (jungleWidth, jungleHeight) {
  this.papayaRadius = 10;
  this.x = (jungleWidth - this.papayaRadius) / 2;
  this.y = jungleHeight - (4 * this.papayaRadius);
  this.speedY = -5;
  this.speedX = 5;
}


// var img = new Image()
// img.src = 'something';
  // drawImage(img, x y w h)


module.exports = Papaya;
