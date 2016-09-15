function Papaya (x, y, width, height) {
  this.x = 330;
  this.y = 463;
  this.papayaRadius = 10;
  this.speedX = 2;
  this.speedY = -2;
  this.color = "#FF8243";
}


Papaya.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.papayaRadius, 0, Math.PI*2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
//MEHTODS

Papaya.prototype.move = function() {

if(this.x + this.speedX > 700 - this.papayaRadius || this.x + this.speedX < this.papayaRadius) {
  this.speedX = -this.speedX;
}
if(this.y + this.speedY > 700 - this.papayaRadius || this.y + this.speedY < this.papayaRadius) {
  this.speedY = -this.speedY;
}
  this.x += this.speedX;
  this.y += this.speedY;
};
//move horizontally --2 conditionals
//move vertically--1 conditionals
//collision detection
  //series of conditionals matching sides of papaya and ctx
    //flip speed








//draw papaya
// var img = new Image()
// img.src = 'something';
  // drawImage(img, x y w h)
  module.exports = Papaya;
