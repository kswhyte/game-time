const assert = require('chai').assert;
const Jungle = require('../lib/jungle');

describe('Block', function () {

  it('should be a function', function () {
    assert.isFunction(Block);
  });

  it('should instantiate a block', function () {
    var block = new Block;
    assert.isObject(block);
  });

});
