const assert = require('chai').assert;
const Jungle = require('../lib/jungle');

describe('Jungle', function () {
  it('should be a constructor function', function () {
    assert.isFunction(Jungle);
  });

  it('should instantiate a jungle', function () {
    var jungle = new Jungle();
    assert.isObject(jungle);
  });

  it('should have a width that is equal to the canvas height', function () {
    var jungle = new Jungle(600, 400);
    assert.equal(jungle.width, 600);
  });

  it('should have a height that is equal to the canvas width', function () {
    var jungle = new Jungle(600, 400);
    assert.equal(jungle.height, 400);
  });

  it('should be able to instantiate a new paddle when a jungle is created', function() {
    var jungle = new Jungle(500, 300);
    assert.isObject(jungle.paddle);
  });

  it('should be able to instantiate a new papaya when a jungle is created', function() {
    var jungle = new Jungle(500, 300);
    assert.isObject(jungle.papaya);
  });

  it('should have a "launchPapayaWithCollisionDetection" function', function() {
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.detectJungleBoundaries);
  });

  // it('should be able to detect jungle boundaries for the papaya', function() {
  //   var jungle = new Jungle()
  //   assert.isFunction()
  // })
});
