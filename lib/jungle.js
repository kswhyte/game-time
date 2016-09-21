const Paddle = require('./paddle');
const Papaya = require('./papaya');
const Block = require('./block');

function Jungle(canvasWidth, canvasHeight, state) {
  this.width = canvasWidth;
  this.height = canvasHeight;
  this.paddle = new Paddle(this.width, this.height);
  this.papaya = new Papaya(this.width, this.height);
  this.level = [];
  this.state = state;
  this.papayas = 3;
}

Jungle.prototype.formRow = function(blockY) {
  var blockRowSize = 10;
  var blockX = -50;
  for(var i = 0; i < blockRowSize; i++) {
    this.level.push(new Block(blockX += 75, blockY));
  }
};

Jungle.prototype.formBlockRow1 = function() {
  var blockY = 20;
  this.formRow(blockY);
};

Jungle.prototype.formBlockRow2 = function() {
  var blockY = 60;
  this.formRow(blockY);
};

Jungle.prototype.formBlockRow3 = function() {
  var blockY = 100;
  this.formRow(blockY);
};

Jungle.prototype.launchPapaya = function() {
  this.papaya.x += this.papaya.speedX;
  this.papaya.y += this.papaya.speedY;
};

Jungle.prototype.detectJungleBoundaries = function() {
  var papaya = this.papaya;
  if(papaya.x + papaya.speedX > this.width - papaya.width ||
    papaya.x + papaya.speedX <= 0) {
    papaya.speedX = -papaya.speedX;
  }
  if(papaya.y + papaya.speedY <= 0) {
    papaya.speedY = -papaya.speedY;
  }
};

Jungle.prototype.detectPaddle = function(paddle) {
  var papaya = this.papaya;
  if (papaya.isCollidingIntoTopOf(paddle)) {
        papaya.speedY = -papaya.speedY;
  } else if (papaya.isCollidingIntoRightOf(paddle)) {
    papaya.speedX = -papaya.speedX;
  } else if (papaya.isCollidingIntoLeftOf(paddle)) {
    papaya.speedX = -papaya.speedX;
      }
};

Jungle.prototype.gameOver = function() {
  alert('Weak Whippin!!!');
  document.location.reload();
};

// if (papaya.y + papaya.speedY > this.height - papaya.height) {

Jungle.prototype.detectBlocks = function() {
  var papaya = this.papaya;
  this.level.forEach(function(block) {
      if (papaya.isCollidingIntoTopOf(block)) {
        papaya.speedY = -papaya.speedY;
        this.alterBlockStatus(block);
      } else if (papaya.isCollidingIntoRightOf(block)) {
        papaya.speedX = -papaya.speedX;
        this.alterBlockStatus(block);
      } else if (papaya.isCollidingIntoBottomOf(block)) {
        papaya.speedY = -papaya.speedY;
        this.alterBlockStatus(block);
      } else if (papaya.isCollidingIntoLeftOf(block)) {
        papaya.speedX = -papaya.speedX;
        this.alterBlockStatus(block);
      }
    }.bind(this));
  };

Jungle.prototype.alterBlockStatus = function(block) {
  block.status = false;
  this.renderLevel(block);
};

Jungle.prototype.renderLevel = function(block) {
  this.level = this.level.filter(function(block) {
    return block.status === true;
  });
};

module.exports = Jungle;
