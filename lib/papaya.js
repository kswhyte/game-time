var Paddle = require('./paddle');
paddle = new Paddle();

function Papaya (x, y, width, height) {
  this.x = 330;
  this.y = 463;
  this.papayaRadius = 10;
  this.speedX = 4;
  this.speedY = -4;
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

Papaya.prototype.detectBoundaries = function() {
  if(this.x + this.speedX > 700 - this.papayaRadius || this.x + this.speedX < this.papayaRadius) {
    this.speedX = -this.speedX;
  } else if(this.y + this.speedY < this.papayaRadius) {
    this.speedY = -this.speedY;
  } else if (this.y + this.speedY > 700 - this.papayaRadius) {
      if(this.x > paddle.x && this.x < paddle.x + paddle.width) {
        dy = -dy;
      } else {
        alert('Weak Whippin!!!');
        document.location.reload();
      }
  this.x += this.speedX;
  this.y += this.speedY;
}
};

// Papaya.prototype.detectPaddle = function() {
//   if(this.y + this.speedY > 690 && this.y + this.speedY < this.papayaRadius) {
//     this.speedY = -this.speedY;
//   }
// };


// var img = new Image()
// img.src = 'something';
  // drawImage(img, x y w h)
module.exports = Papaya;
