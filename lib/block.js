function Block(x, y) {
  this.x = x || 300;
  this.y = y || 100;
  this.width = 50;
  this.height = 20;
  this.status = true;
}

//
// Block.prototype.detectBlockCollision = function(block) {
//   if(this.papaya.x > block.x && this.papaya.x < block.x + block.width) {
//     this.papaya.speedY = -this.papaya.speedY;
//   }
// };


module.exports = Block;
