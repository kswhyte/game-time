const assert = require('chai').assert;
const Jungle = require('../lib/jungle');
const Papaya = require('../lib/papaya');
const Block = require('../lib/block');
const Paddle = require('../lib/block');
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

  it('should have a level property', function(){
    var jungle = new Jungle(600,400);
    assert.equal(jungle.level, false)
  });


  it.skip('should have a state property', function() {
    var jungle = new Jungle(600, 400);
    assert.equal(jungle.state, true);
  });

  it('should have a default papayas property of 3', function() {
    var jungle = new Jungle(600, 400);
    assert.equal(jungle.papayas, 3)
  });

  it('should be able to instantiate a new paddle when a jungle is created', function() {
    var jungle = new Jungle(500, 300);
    assert.isObject(jungle.paddle);
  });

  it('should be able to instantiate a new papaya when a jungle is created', function() {
    var jungle = new Jungle(500, 300);
    assert.isObject(jungle.papaya);
  });

  it('should have a "launchPapaya" function', function() {
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.launchPapaya);
  });

  it('should have a prototype method called formRow', function() {
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.formRow);
  });

  it('should have a prototype method called formBlockRow1', function() {
    var jungle = new Jungle(40,40);
    assert.isFunction(jungle.formBlockRow1);
  });

  it('should have a prototype method called formBlockRow2', function() {
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.formBlockRow2);
  });

  it('should have a prototype method called formBlockRow3', function() {
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.formBlockRow3)
  });

  it('should have a detectJungleBoundaries prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.detectJungleBoundaries);
  });

  it('should have a detectPaddle prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.detectPaddle);
  });

  it('should have a gameOver prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.gameOver);
  });

  it('should have a detectBlocks prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.detectBlocks)
  });

  it('should have an alterBlockStatus prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.alterBlockStatus);
  });

  it('should have a renderLevel prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.renderLevel);
  });

  it('if the papaya is colliding into the top of the paddle, the papaya.speedY should be -4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10, 10);
    var paddle = new Paddle(100, 10);
    papaya.y = 491;
    assert.equal(papaya.speedY, -4);
  })

  it('if the papaya is colliding into the right of a block, the papaya.speedX should be +4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10,10);
    var block = new Block(300, 100, 50, 20);
    papaya.x = 349;
    assert.equal(papaya.speedX, 4);
  });

  it('if the papaya is colliding into the bottom of a block, the papaya.speedY should be -4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10,10);
    var block = new Block(300, 100, 50, 20);
    papaya.y = 119;
    assert.equal(papaya.speedY, -4);
  });

  it('if the papaya is colliding into the left of a block, the papaya.speedX should be 4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10,10);
    var block = new Block(300, 100, 50, 20);
    papaya.x = 291;
    assert.equal(papaya.speedX, 4)
  });

  it('if the papaya is colliding into the top of a block, the papaya.speedY should be -4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10,10);
    var block = new Block(300, 100, 50, 20);
    papaya.y = 91;
    assert.equal(papaya.speedY, -4);
  });

  it('if a level has been rendered, the status of a block should be true', function(){
    var jungle = new Jungle(500, 700);
    var block = new Block(300, 100, 50, 20);
    assert.equal(block.status, true)
  });

  it('if a block has been hit, its status should be false', function(){
    var jungle = new Jungle(500, 700);
    var block = new Block(300, 100, 50, 20);
  })






  // it('should be able to detect jungle boundaries for the papaya', function() {
  //   var jungle = new Jungle()
  //   assert.isFunction()
  // })
});
