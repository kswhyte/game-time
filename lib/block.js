function Block(x, y, width, height) {
  this.x = x || 300;
  this.y = y || 100;
  this.width = width || 50;
  this.height = height || 20;
}

//
// Block.prototype.detectBlockCollision = function(block) {
//   if(this.papaya.x > block.x && this.papaya.x < block.x + block.width) {
//     this.papaya.speedY = -this.papaya.speedY;
//   }
// };


module.exports = Block;
