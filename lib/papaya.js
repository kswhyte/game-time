function Papaya (jungleWidth, jungleHeight) {
  this.papayaRadius = 10;
  this.x = (jungleWidth - this.papayaRadius) / 2;
  this.y = jungleHeight - this.papayaRadius;
  this.speedY = -4;
  this.speedX = 4;
}


// var img = new Image()
// img.src = 'something';
  // drawImage(img, x y w h)


module.exports = Papaya;
