const Paddle = require('./paddle');
const Papaya = require('./papaya');
const Block = require('./block');

function Jungle(canvasWidth, canvasHeight) {
  // var options = {};
  this.width = canvasWidth;
  this.height = canvasHeight;
  this.paddle = new Paddle(this.width, this.height);
  this.papaya = new Papaya(this.width, this.height);
  // this.block = new Block();
  // this.block = new Block(500, 300, 30, 10);
  this.blockRow1 = [];
  this.blockRow2 = [];
  this.blockRow3 = [];
  // this.blocksRow1 = [new Block(100, 200), new Block(200, 200), new Block(300, 200)];
  // debugger;
}

Jungle.prototype.formBlockRow1 = function() {
  var blockRowSize = 10;
  var blockX = -50;
  var blockY = 20;
  for(var i = 0; i < blockRowSize; i++) {
    this.blockRow1[i] = new Block(blockX += 75, blockY);
  }
};

Jungle.prototype.formBlockRow2 = function() {
  var blockRowSize = 10;
  var blockX = -50;
  var blockY = 60;
  for(var i = 0; i < blockRowSize; i++) {
    this.blockRow2[i] = new Block(blockX += 75, blockY);
  }
};

Jungle.prototype.formBlockRow3 = function() {
  var blockRowSize = 10;
  var blockX = -50;
  var blockY = 100;
  for(var i = 0; i < blockRowSize; i++) {
    this.blockRow3[i] = new Block(blockX += 75, blockY);
  }
};

// Jungle.prototype.detectBlockCollisionRow1 = function(blocksRow1) {
//   this.blocksRow1.forEach(this.detectBlockCollision.bind(this));
//     debugger;
// };
//
// Jungle.prototype.detectBlockCollision = function(block) {
//   if(this.papaya.x > block.x && this.papaya.x < block.x + block.width) {
//     this.papaya.speedY = -this.papaya.speedY;
//   }
// };

// Jungle.prototype.isPapayaCollidingWithBlock = function(blocksRow1) {
//   for (var i=0; i < blocksRow1.length; i++){
//     if (this.isBallColliding(blocksRow1[i])) {
//       this.ball.bounce(blocksRow1[i]);
//       blocksRow1[i].status--;
//       this.renderCourt(blocksRow1);
//     }
//   }
// };

//for each block, if(the papaya.x < block.x && papaya x < block.x + block.width), then papaya.speedy = -papaya.speedY

Jungle.prototype.detectJungleBoundaries = function() {
  if(this.papaya.x + this.papaya.speedX > this.width - this.papaya.width || this.papaya.x + this.papaya.speedX < this.papaya.width) {
    this.papaya.speedX = -this.papaya.speedX;
  }
  if(this.papaya.y + this.papaya.speedY < this.papaya.height) {
    this.papaya.speedY = -this.papaya.speedY;
  } else if (this.papaya.y + this.papaya.speedY > this.height - this.papaya.height) {
    if(this.papaya.x > this.paddle.x && this.papaya.x < this.paddle.x + this.paddle.width) {
      this.papaya.speedY = -this.papaya.speedY;
    }
    // } else {
    //   alert('Weak Whippin!!!');
    //   document.location.reload();
    // }
  }
  this.papaya.x += this.papaya.speedX;
  this.papaya.y += this.papaya.speedY;
};


// drawBlocks() iterating through the blocks and calling draw on each block.
//

// Jungle.prototype.makeLevel2BlockLayout = function(x, y, width, height) {
//   var block = new Block ();
//   this.papaya = new Papaya();
//   this.paddle = new Paddle();
//   this.blockRow2.push(block);
// };

// function makeLevel1Rows(row, x, y, width) {
//   for (var i = 0; i < 9; i++) {
//     row.push(new Block(x, y));
//     x = x + x.width + 10;
//   }
// }




module.exports = Jungle;











// Jungle.prototype.detectJungleBoundaries = function() {
//   if(this.papaya.x + this.papaya.speedX > this.width - this.papaya.papayaRadius || this.papaya.x + this.papaya.speedX < this.papaya.papayaRadius) {
//     this.papaya.speedX = -this.papaya.speedX;
//   }
//   if(this.papaya.y + this.papaya.speedY < this.papaya.papayaRadius) {
//     this.papaya.speedY = -this.papaya.speedY;
//   } else if (this.papaya.y + this.papaya.speedY > this.height - this.papaya.papayaRadius * 2) {
//     if(this.papaya.x > this.paddle.x && this.papaya.x < this.paddle.x + this.paddle.width) {
//       this.papaya.speedY = -this.papaya.speedY;
//     }
