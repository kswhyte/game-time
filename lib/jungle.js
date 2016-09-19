const Paddle = require('./paddle');
const Papaya = require('./papaya');
const Block = require('./block');

function Jungle(canvasWidth, canvasHeight) {
  this.width = canvasWidth;
  this.height = canvasHeight;
  this.paddle = new Paddle(this.width, this.height);
  this.papaya = new Papaya(this.width, this.height);
  this.blockRow1 = [];
  this.blockRow2 = [];
  this.blockRow3 = [];
  this.level = [];
}

Jungle.prototype.createLevel = function() {
  if (this.level = []){
  this.level.push(this.blockRow1, this.blockRow2, this.blockRow3);
}
  else{return this.level;}
};

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

//for each block, if(the papaya.x < block.x && papaya x < block.x + block.width), then papaya.speedy = -papaya.speedY

Jungle.prototype.detectPaddle = function(paddle) {
  var papaya = this.papaya;
  // debugger;
  if (papaya.isPapayaCollidingInto(paddle)) {
    // if (papaya.y + papaya.speedY > this.height - papaya.height) {
      if(papaya.x > this.paddle.x && papaya.x < this.paddle.x + this.paddle.width) {
        papaya.speedY = -papaya.speedY;
      }   //  else {
        //   alert('Weak Whippin!!!');
        //   document.location.reload();
        // }
      // }
  }
};

// Jungle.prototype.detectBlock = function() {
//   // var block = this.block;
//   var papaya = this.papaya;
//   // debugger;
//   this.createLevel().forEach(function(block) {
//     if (papaya.isPapayaCollidingInto(block)) {
//     papaya.speedY = -papaya.speedY;
//   }
//   });
// };
//
// Jungle.prototype.isPapayaCollidingWithBlock = function(blocksRow1) {
//   for (var i=0; i < blocksRow1.length; i++){
//     if (this.isBallColliding(blocksRow1[i])) {
//       this.ball.bounce(blocksRow1[i]);
//       blocksRow1[i].status--;
//       this.renderCourt(blocksRow1);
//     }
//   }
// };

Jungle.prototype.detectJungleBoundaries = function() {
  var papaya = this.papaya;
  if(papaya.x + papaya.speedX > this.width - papaya.width || papaya.x + papaya.speedX < papaya.width) {
    papaya.speedX = -papaya.speedX;
  }
  // console.log(papaya.speedX);
  if(papaya.y + papaya.speedY < papaya.height) {
    papaya.speedY = -papaya.speedY;
  }
  papaya.x += papaya.speedX;
  papaya.y += papaya.speedY;
};


module.exports = Jungle;
