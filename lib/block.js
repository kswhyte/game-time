// function Block() {
//   this.x = 300;
//   this.y = 300;
//   this.width = 50;
//   this.height = 20;
// }
//

function Block(x, y, width, height) {
  this.x = x || 300;
  this.y = y || 300;
  this.width = width || 50;
  this.height = height || 20;
}

module.exports = Block;
