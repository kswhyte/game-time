const Paddle = require('./paddle');
const Papaya = require('./papaya');
const Block = require('./block');

function Jungle(canvasWidth, canvasHeight, state) {
  this.width = canvasWidth;
  this.height = canvasHeight;
  this.paddle = new Paddle(this.width, this.height);
  this.papaya = new Papaya(this.width, this.height);
  this.level = [];
  this.sparePapayas = 3;
  this.state = state;
}

Jungle.prototype.launchPapaya = function() {
  this.papaya.x += this.papaya.speedX;
  this.papaya.y += this.papaya.speedY;
};

Jungle.prototype.formRows = function(blockY) {
  var blockRowSize = 9;
  var blockX = -50;
  for(var i = 0; i < blockRowSize; i++) {
    this.level.push(new Block(blockX += 75, blockY));
  }
};

Jungle.prototype.generateRowsBasedOnLevel = function(lvl) {
  var blockY = 20;
  this.formRows(blockY);

  for (var i = 0; i < (lvl + 1); i++) {
    this.formRows(blockY += 40);
  }
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

Jungle.prototype.harvestFreshPapaya = function() {
  this.papaya.x = (this.width - this.papaya.width) / 2;
  this.papaya.y = this.height - (4 * this.papaya.height);
  this.papaya.speedX = 4;
  this.papaya.speedY = -4;
};

Jungle.prototype.resetPaddle = function() {
  this.x = (this.width / 2) - (this.paddle.width / 2);
  this.y = this.height - this.paddle.height;
};

Jungle.prototype.increasePapayaSpeed = function() {
  this.papaya.speedX += 1;
  this.papaya.speedY -= 1;
};

Jungle.prototype.increasePaddleSpeed = function() {
  this.paddle.moveLeft = function() {
    this.x -= 11;
  };
  this.paddle.moveRight = function() {
    this.x += 11;
  };
};


module.exports = Jungle;
