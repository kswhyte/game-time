const Paddle = require('./paddle');
const Papaya = require('./papaya');
const Block = require('./block');

function Jungle(canvasWidth, canvasHeight) {
  this.width = canvasWidth;
  this.height = canvasHeight;
  this.paddle = new Paddle(this.width, this.height);
  this.papaya = new Papaya(this.width, this.height);
  this.level = [];
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
  this.formRow(blockY);0
};

Jungle.prototype.launchPapayaWithCollisionDetection = function() {
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

Jungle.prototype.detectPaddle = function(paddle) {
  var papaya = this.papaya;
  if (papaya.isCollidingIntoTopOf(paddle)) {
      // if(papaya.x + papaya.width > paddle.x && papaya.x < paddle.x + paddle.width && papaya.y + papaya.height < paddle.y ||
      // papaya.y + papaya.height > paddle.y && papaya.y + papaya.height < paddle.y + paddle.height) {
        papaya.speedY = -papaya.speedY;
      } else if (papaya.y + papaya.height > this.height) {
        this.gameOver();
      }
  // }
};

Jungle.prototype.gameOver = function() {
  alert('Weak Whippin!!!');
  document.location.reload();
};

// if (papaya.y + papaya.speedY > this.height - papaya.height) {

Jungle.prototype.detectBlocks = function() {
  var papaya = this.papaya;
  // debugger
  // row.forEach(function(block) {
  this.level.forEach(function(block) {
      if (papaya.isCollidingIntoTopOf(block) || papaya.isCollidingIntoBottomOf(block)) {
        // if (papaya.x + papaya.width > block.x &&
        // papaya.x < block.x + block.width &&
        // papaya.y > block.y + block.height &&
        // papaya.y < block.y) {
          papaya.speedY = -papaya.speedY;
          this.alterBlockStatus(block);
        // papaya.y + papaya.height > block.y && papaya.x > block.x &&
        // papaya.

        // if(papaya.x + papaya.width > block.x && papaya.x < block.x + block.width && papaya.y < block.y + block.height ||
        // papaya.y + papaya.height > block.y && papaya.y + papaya.height < block.y) {
        // }

        // } else if (papaya.x + papaya.width > block.x && papaya.x < block.x + block.width && papaya.y + papaya.height < block.y ||
        // papaya.y + papaya.height > block.y && papaya.y + papaya.height < block.y + block.height) {
        //   papaya.speedY = -papaya.speedY;
        // }
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


        // if(papaya.x > block.x && papaya.x < block.x + block.width) {
        //   papaya.speedY = -papaya.speedY;
        // } else if (papaya.y > block.y && papaya.y < block.y + block.height) {
        //   papaya.speedY = -papaya.speedY;
        // }
        //top left, top right
        // if(papaya.x < block.x &&
        //   papaya.x + papaya.width > block.x &&
        //   block.y > papaya.y && block.y < papaya.y + papaya.height ||
        //     papaya.x < block.x + block.width && block.x + block.width < papaya.x + papaya.width && block.y > papaya.y && block.y < papaya.y + papaya.height
            // papaya.x + papaya.width > block.x + block.width ||
            // papaya.x > block.x && papaya.x + papaya.width < block.x + block.width
          // ) {
              // papaya.speedY = -papaya.speedY;
              // papaya.y =  block.y - papaya.height
            // }
            //bottom left
          // if(papaya.x < block.x && papaya.x + papaya.width > block.x && block.y + block.height > papaya.y && papaya.y+ papaya.height > block.y + block.height) {
          //   block.status = false
          //   papaya.speedY = -papaya.speedY;
          //
          // }

          // if() {
          //   papaya.speedY = -papaya.speedY;
          // }
          //invert
            //invert
            // if(papaya.x )
      // }
    // });





module.exports = Jungle;
