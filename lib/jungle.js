function Jungle(width, height) {
  this.width = width;
  this.height = height;
}

Jungle.prototype.blockRow1 = [];
Jungle.prototype.blockRow2 = [];
Jungle.prototype.blockRow3 = [];

jungle.prototype.makeLevel1BlockLayout = function(x, y, width, height, this) {
  var block = new Block ();
  this.blockRow1.push(block);
};

jungle.prototype.makeLevel2BlockLayout = function(x, y, width, height, this) {
  var block = new Block ();
  this.blockRow2.push(block);
};

module.exports = Jungle;
// what else do we need to export here?
// can we export all of this from index.js by requiring files there and using module.exports?
