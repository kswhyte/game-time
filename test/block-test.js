const assert = require('chai').assert;
const Block = require('../lib/block');

describe('Block', function () {

  it('should be a function', function () {
    assert.isFunction(Block);
  });

  it('should instantiate a block', function () {
    var block = new Block();
    assert.isObject(block);
  });

});
