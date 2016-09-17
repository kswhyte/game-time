const Paddle = require('./paddle');
const Papaya = require('./papaya');
const Block = require('./block');


//make multiple blocks
  //define function that pushes blocks into blocksRow1
  //for each block in blocksRow1 draw the block to the canvas

function Jungle(canvasWidth, canvasHeight) {
  // var options = {};
  this.width = canvasWidth;
  this.height = canvasHeight;
  this.paddle = new Paddle(this.width, this.height);
  this.papaya = new Papaya(this.width, this.height);
  // this.block = new Block();
  // this.block = new Block(500, 300, 30, 10);
  this.blocksRow1 = [new Block(100, 200), new Block(200, 200), new Block(300, 200)];
}

// Jungle.prototype.makeBlocksRow1 = function() {
//   this.blocksRow1.push
//     blocksRow1.push(this.Block)
//   })
// };



Jungle.prototype.detectJungleBoundaries = function() {
  if(this.papaya.x + this.papaya.speedX > this.width - this.papaya.papayaRadius || this.papaya.x + this.papaya.speedX < this.papaya.papayaRadius) {
    this.papaya.speedX = -this.papaya.speedX;
  }
  if(this.papaya.y + this.papaya.speedY < this.papaya.papayaRadius) {
    this.papaya.speedY = -this.papaya.speedY;
  } else if (this.papaya.y + this.papaya.speedY > this.height - this.papaya.papayaRadius * 2) {
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
