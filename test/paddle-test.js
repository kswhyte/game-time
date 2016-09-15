const assert = require('chai').assert;
const Paddle = require('../lib/paddle');

describe('Paddle', function () {

  it('should be a function', function () {
    assert.isFunction(Paddle);
  });

  it('should instantiate a paddle', function () {
    var paddle = new Paddle();
    assert.isObject(paddle);
  });

  it('should take the first argument and set it as the "x" property of the instantiated paddle object', function () {
    var paddle = new Paddle(15);
    assert.equal(paddle.x, 15);
  });

  it('should take the first argument and set it as the "y" property of the instantiated paddle object', function () {
    var paddle = new Paddle(15, 30);
    assert.equal(paddle.y, 30);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function() {
    var paddle = new Paddle(15, 30, 40);
    assert.equal(paddle.width, 40);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function() {
    var paddle = new Paddle(15, 20, 40, 60);
    assert.equal(paddle.height, 60);
  });

});

  describe('paddle', function () {

    it('should have a method called "moveRight()"', function () {
      var paddle = new Paddle(15, 30);
      assert.isFunction(paddle.moveRight);
    });

    it('"moveRight()" should increment the "x" property by 1', function () {
      var paddle = new Paddle(15, 30);
      paddle.moveRight();
      assert.equal(paddle.x, 16, 15);
    });

    it('should have a method called "moveLeft()"', function() {
      var cupcake = new Paddle(15, 30);
      assert.isFunction(cupcake.moveLeft);
    });

    it('"moveLeft()" should decrement the "x" property by 1', function() {
      var cupcake = new Paddle(15, 30);
      cupcake.moveLeft();
      assert.equal(cupcake.x, 14);
    });


});
