const Paddle = require('./paddle');
const Papaya = require('./papaya');
const Block = require('./block');

function Jungle(canvasWidth, canvasHeight) {
  this.width = canvasWidth;
  this.height = canvasHeight;
  this.paddle = new Paddle(this.width, this.height);
  this.papaya = new Papaya(this.width, this.height);
  this.blockSetup = [];
  this.sparePapayas = 3;
}

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

Jungle.prototype.gameOver = function() {
  alert('Weak Whippin!!!');
  document.location.reload();
};

Jungle.prototype.detectBlocks = function() {
  var papaya = this.papaya;
  this.blockSetup.forEach(function(block) {
      if (papaya.isCollidingIntoTopOf(block)) {
        this.reverseY(papaya);
        this.alterBlockStatus(block);
      } else if (papaya.isCollidingIntoRightOf(block)) {
        this.reverseX(papaya);
        this.alterBlockStatus(block);
      } else if (papaya.isCollidingIntoBottomOf(block)) {
        this.reverseY(papaya);
        this.alterBlockStatus(block);
      } else if (papaya.isCollidingIntoLeftOf(block)) {
        this.reverseX(papaya);
        this.alterBlockStatus(block);
      }
    }.bind(this));
  };


Jungle.prototype.reverseX = function (papaya) {
  papaya.speedX = -papaya.speedX;
};

Jungle.prototype.reverseY = function (papaya) {
  papaya.speedY = -papaya.speedY;
};

Jungle.prototype.formRows = function(blockY) {
  var blockRowSize = 9;
  var blockX = -50;
  for(var i = 0; i < blockRowSize; i++) {
    this.blockSetup.push(new Block(blockX += 75, blockY));
  }
};

Jungle.prototype.alterBlockStatus = function(block) {
  block.status = false;
  this.updateBlockSetup(block);
};

Jungle.prototype.updateBlockSetup = function(block) {
  this.blockSetup = this.blockSetup.filter(function(block) {
    return block.status === true;
  });
};

Jungle.prototype.generateRowsBasedOnLevel = function(lvl) {
  var blockY = 20;
  this.formRows(blockY);
  for (var i = 0; i < (lvl + 1); i++) {
    this.formRows(blockY += 40);
  }
};

Jungle.prototype.detectPaddle = function(paddle) {
  var papaya = this.papaya;
  var papayaLeftSide = papaya.x;
  var papayaRightSide = papayaLeftSide + papaya.width;
  if(papaya.isCollidingIntoTopOf(paddle)) {
    papaya.speedY = -papaya.speedY;
    if (papayaLeftSide >= paddle.x &&
      papayaLeftSide <= paddle.x + 25) {
        papaya.leftWhippage();
      }
    if (papayaRightSide >= paddle.x &&
      papayaRightSide <= paddle.x + 25) {
        papaya.leftWhippage();
    }
    if (papayaLeftSide > paddle.x + 25 &&
      papayaLeftSide < paddle.x + 75) {
        papaya.centerWhippage();
    }
    if (papayaRightSide > paddle.x + 25 &&
      papayaRightSide < paddle.x + 75) {
        papaya.centerWhippage();
    }
    if (papayaLeftSide >= paddle.x + 75 &&
      papayaLeftSide <= paddle.x + paddle.width) {
        papaya.rightWhippage();
    }
    if (papayaRightSide >= paddle.x + 75 &&
      papayaRightSide <= paddle.x + paddle.width) {
        papaya.rightWhippage();
  } else if (papaya.isCollidingIntoRightOf(paddle)) {
    papaya.speedX = -papaya.speedX;
  } else if (papaya.isCollidingIntoLeftOf(paddle)) {
    papaya.speedX = -papaya.speedX;
  }
  }
};

Jungle.prototype.harvestFreshPapaya = function() {
  this.papaya.x = (this.width - this.papaya.width) / 2;
  this.papaya.y = this.height - (4 * this.papaya.height);
  this.papaya.speedX = 4;
  this.papaya.speedY = -4;
};

Jungle.prototype.increasePapayaSpeed = function() {
  this.papaya.speedX += 1;
  this.papaya.speedY -= 1;
};

Jungle.prototype.resetPaddle = function() {
  this.paddle.x = (this.width / 2) - (this.paddle.width / 2);
  this.paddle.y = this.height - this.paddle.height;
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
