var Paddle = require('./paddle');
var Papaya = require('./papaya');
var Block = require('./block');

function Jungle() {
  this.paddle = new Paddle();
  this.papaya = new Papaya();
  this.blockRow1 = [];
  this.blockRow2 = [];
  this.blockRow3 = [];
}

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

Jungle.prototype.launchPapaya = function (){
  this.papaya.move();
};



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
