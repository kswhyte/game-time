var options;
var paddle;

function Papaya (options, paddle) {
  this.options = options;
  this.paddle = paddle;
}

Papaya.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.options.x, this.options.y, this.options.papayaRadius, 0, Math.PI*2);
  ctx.fillStyle = this.options.papayaColor;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};

// Papaya.prototype.detectBoundaries = function() {
//   if(this.options.x + this.options.speedX > 700 - this.options.papayaRadius || this.options.x + this.options.speedX < this.options.papayaRadius) {
//       this.options.speedX = -this.options.speedX;
//     }
//   if(this.options.y + this.options.speedY < this.options.papayaRadius) {
//       this.options.speedY = -this.options.speedY;
//     }
// };

Papaya.prototype.detectBoundaries = function() {
  if(this.options.x + this.options.speedX > 700 - this.options.papayaRadius || this.options.x + this.options.speedX < this.options.papayaRadius) {
    this.options.speedX = -this.options.speedX;
  } else if(this.options.y + this.options.speedY < this.options.papayaRadius) {
    this.options.speedY = -this.options.speedY;
  } else if (this.options.y + this.options.speedY > 700 - this.options.papayaRadius ) {
      if(this.options.x > paddle.x && this.options.x < paddle.x + paddle.width) {
        this.options.speedX = -this.options.speedY;
      } else {
        alert('Weak Whippin!!!');
        document.location.reload();
      }
  this.options.x += this.speedX;
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
