const assert = require('chai').assert;
const Paddle = require('../lib/paddle');

describe('Paddle', function () {
  it('should be a constructor function', function () {
    assert.isFunction(Paddle);
  });

  it('should instantiate a paddle', function () {
    var paddle = new Paddle();
    assert.isObject(paddle);
  });

  it('should take the jungle width and use it to set the "x" property of the paddle', function () {
    var paddle = new Paddle(500, 300);
    assert.equal(paddle.x, 200);
  });

  it('should take the jungle height and set it as the "y" property of the paddle', function () {
    var paddle = new Paddle(500, 300);
    assert.equal(paddle.y, 290);
  });

  it('should have a default "width" property', function() {
    var paddle = new Paddle(500, 300);
    assert.equal(paddle.width, 100);
  });

  it('should have a default "height" property', function() {
    var paddle = new Paddle(500, 300);
    assert.equal(paddle.height, 10);
  });
});

describe('paddle', function () {

  it('should have a method called "moveLeft()"', function() {
    var paddle = new Paddle(500, 300);
    assert.isFunction(paddle.moveLeft);
  });

  it('"moveLeft()" should decrement the "x" property by 1', function() {
    var paddle = new Paddle(500, 300);
    paddle.moveLeft();
    assert.equal(paddle.x, 193);
  });

  it('should have a method called "moveRight()"', function () {
    var paddle = new Paddle(500, 300);
    assert.isFunction(paddle.moveRight);
  });

  it('"moveRight()" should increment the "x" property by 1', function () {
    var paddle = new Paddle(500, 300);
    paddle.moveRight();
    assert.equal(paddle.x, 207);
  });
});
