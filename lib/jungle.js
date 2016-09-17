const Paddle = require('./paddle');
const Papaya = require('./papaya');

function Jungle(canvasWidth, canvasHeight) {
  this.width = canvasWidth;
  this.height = canvasHeight;
  this.paddle = new Paddle(this.width, this.height);
  this.papaya = new Papaya(this.width, this.height);
}

// Jungle.prototype.draw = function(ctx) {
//   this.draw(ctx);
//   this.papaya.draw(ctx);
// }


Jungle.prototype.detectJungleBoundaries = function() {
  if(this.papaya.x + this.papaya.speedX > 700 - this.papaya.papayaRadius || this.papaya.x + this.papaya.speedX < this.papaya.papayaRadius) {
    this.papaya.speedX = -this.papaya.speedX;
  }

  if(this.papaya.y + this.papaya.speedY < this.papaya.papayaRadius) {
    this.papaya.speedY = -this.papaya.speedY;
  }
  this.papaya.x += this.speedX;
  this.papaya.y += this.speedY;
};

Jungle.prototype.detectPaddle = function () {
  if (this.papaya.y + this.papaya.speedY > 500 - this.papaya.papayaRadius) {
      this.papaya.speedX = -this.papaya.speedY;
      // if(this.papaya.x > paddle.x && this.papaya.x < paddle.x + paddle.width) {
      // } else {
      //   alert('Weak Whippin!!!');
      //   document.location.reload();
      // }
    }
};

Jungle.prototype.leftArrowPressed = function () {
  if (this.paddle.x > 0){
    this.paddle.moveLeft();
  }
};

Jungle.prototype.rightArrowPressed = function () {
  if (this.paddle.x < 600){
    this.paddle.moveRight();
  }
};

// Jungle.prototype.draw = function()
// {
//   this.options.ctx.clearRect(0, 0, this.options.canvas.width, this.options.canvas.height);
//   this.papaya.draw(this.options.ctx);
//   this.paddle.draw(this.options.ctx);
//   if(this.options.x + this.options.speedX > this.options.canvas.width-this.options.papayaRadius || this.options.x + this.options.speedX < this.options.papayaRadius) {
//         this.options.speedX = -this.options.speedX;
//     }
//     if(this.options.y + this.options.speedY > this.options.canvas.height-this.options.papayaRadius || this.options.y + this.options.speedY < this.options.papayaRadius) {
//         this.options.speedY = -this.options.speedY;
//     }
//
//     if(this.options.rightPressed && this.options.paddleX < this.options.canvas.width-this.options.paddleWidth) {
//         this.options.paddleX += 7;
//     }
//     else if(this.options.leftPressed && this.options.paddleX > 0) {
//         this.options.paddleX -= 7;
//     }
//
//     this.options.x += this.options.speedX;
//     this.options.y += this.options.speedY;
// };




//
// Jungle.prototype.launchPapaya = function (){
//   var jungle = new Jungle();
//   if(jungle.papaya.x + jungle.papaya.speedX > 700 - jungle.papaya.jungle.papayaRadius || jungle.papaya.x + jungle.papaya.speedX < jungle.papaya.jungle.papayaRadius) {
//     jungle.papaya.speedX = -jungle.papaya.speedX;
//   } else if(jungle.papaya.y + jungle.papaya.speedY < jungle.papaya.jungle.papayaRadius) {
//     jungle.papaya.speedY = -jungle.papaya.speedY;
//   } else if (jungle.papaya.y + jungle.papaya.speedY > 700 - jungle.papaya.jungle.papayaRadius) {
//       if(jungle.papaya.x > paddle.x && jungle.papaya.x < paddle.x + paddle.width) {
//         dy = -dy;
//       } else {
//         alert('Weak Whippin!!!');
//         document.location.reload();
//       }
//   }
//   jungle.papaya.x += jungle.papaya.speedX;
//   jungle.papaya.y += jungle.papaya.speedY;
// };



// function that handles collision and passes paddle coord as argument to  papaya collision detection

// drawBlocks() iterating through the blocks and calling draw on each block.





// function makeLevel1Rows(row, x, y, width) {
//   for (var i = 0; i < 9; i++) {
//     row.push(new Block(x, y));
//     x = x + x.width + 10;
//   }
// }
//
// Jungle.prototype.makeLevel1BlockLayout = function(x, y, width, height) {
//   makeLevel1Rows(this.blockRow1, x, y, width);
// };
//
// Jungle.prototype.makeLevel2BlockLayout = function(x, y, width, height) {
//   var block = new Block ();
//   this.papaya = new Papaya();
//   this.paddle = new Paddle();
//   this.blockRow2.push(block);
// };



module.exports = Jungle;
// what else do we need to export here?
// can we export all of this from index.js by requiring files there and using module.exports?


// keeps track of blocks and papaya
