const assert = require('chai').assert;
const Papaya = require('../lib/papaya');

describe('Papaya', function () {

  it('should be a constructor function', function () {
    assert.isFunction(Papaya);
  });

  it('should instantiate a papaya', function () {
    var papaya = new Papaya();
    assert.isObject(papaya);
  });

  it('should have a default "radius"', function() {
    var papaya = new Papaya(500, 300);
    assert.equal(papaya.papayaRadius, 10);
  });

  it('should have a default "speedX" property that indicates its horizontal direction of movement', function() {
    var papaya = new Papaya(500, 300);
    assert.equal(papaya.speedX, 5);
  });

  it('should have a default "speedY" property that indicates its vertical direction of movement', function() {
    var papaya = new Papaya(500, 300);
    assert.equal(papaya.speedY, -5);
  });

  it('should take the jungle width and use it to set the starting "x" property of the papaya', function () {
    var papaya = new Papaya(500, 300);
    assert.equal(papaya.x, 245);
  });

  it('should take the jungle height and set it as the starting "y" property of the papaya', function () {
    var papaya = new Papaya(500, 300);
    assert.equal(papaya.y, 260);
  });

});
