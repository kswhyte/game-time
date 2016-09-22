const assert = require('chai').assert;
const Block = require('../lib/block');

describe('Block', function () {

  it('should be a constructor function', function () {
    assert.isFunction(Block);
  });

  it('should instantiate a block', function () {
    var block = new Block(300, 100);
    assert.isObject(block);
  });

  it('should have a default "width"', function() {
    var block = new Block(300, 100);
    assert.equal(block.width, 50);
  });

  it('should have a default "height"', function() {
    var block = new Block();
    assert.equal(block.height, 20)
  });

  it('should have a default status of true', function(){
    var block = new Block();
    assert.equal(block.status, true);
  });
});
