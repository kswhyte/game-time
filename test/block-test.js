const assert = require('chai').assert;
const Block = require('../lib/block');

describe('Block', function () {

  it.skip('should be a constructor function', function () {
    assert.isFunction(Block);
  });

  it.skip('should instantiate a block', function () {
    var block = new Block();
    assert.isObject(block);
  });

});
