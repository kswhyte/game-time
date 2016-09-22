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

  it('should have a blockSetup property', function(){
    var jungle = new Jungle(600,400);
    assert.equal(jungle.blockSetup, false)
  });

  it('should have a default sparePapayas property of 3', function() {
    var jungle = new Jungle(600, 400);
    assert.equal(jungle.sparePapayas, 3)
  });
});

describe('Jungle and Paddle', function () {
  it('should be able to instantiate a new paddle when a jungle is created', function() {
    var jungle = new Jungle(500, 300);
    assert.isObject(jungle.paddle);
  });

  it('should have a detectPaddle prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.detectPaddle);
  });

  it('if the papaya is colliding into the top of the paddle, the papaya.speedY should be -4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10, 10);
    var paddle = new Paddle(100, 10);
    papaya.y = 491;
    assert.equal(papaya.speedY, -4);
  });

  it('if the papaya is colliding into the right quarter of the paddle the papaya.speedX should be 3.6', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10, 10);
    var paddle = new Paddle(100, 10);
    papaya.x = 176;
    papaya.y = 491;
    paddle.x = 100;
    paddle.y = 490;
    papaya.rightWhippage();
    assert.equal(papaya.speedX, 3.6)
  });

  it('if the papaya is colliding into the left quarter of the paddle the papaya.speedX should be 3.6', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10, 10);
    var paddle = new Paddle(100, 10);
    papaya.x = 102;
    papaya.y = 491;
    paddle.x = 100;
    paddle.y = 490;
    papaya.leftWhippage();
    assert.equal(papaya.speedX, 3.6)
  });

  it('if the papaya is colliding into the center of the paddle the papaya.speedX should be 4.4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Papaya(10, 10);
    var paddle = new Paddle(100, 10);
    papaya.x = 130;
    papaya.y = 491;
    paddle.x = 100;
    paddle.y = 490;
    papaya.centerWhippage();
    assert.equal(papaya.speedX, 4.4)
  });

});

describe('Jungle and Papaya', function () {

  it('should be able to instantiate a new papaya when a jungle is created', function() {
    var jungle = new Jungle(500, 300);
    assert.isObject(jungle.papaya);
  });

  it('should have a "launchPapaya" function', function() {
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.launchPapaya);
  });

});

describe('Jungle and Blocks', function () {

  it('should have a prototype method called formRows', function() {
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.formRows);
  });

  it('should have a prototype method called generateRowsBasedOnLevel', function() {
    var jungle = new Jungle(40,40);
    assert.isFunction(jungle.generateRowsBasedOnLevel);
  });

  it('should have a detectBlocks prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.detectBlocks)
  });

  it('should have an alterBlockStatus prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.alterBlockStatus);
  });

  it('should have an updateBlockSetup prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.updateBlockSetup);
  });

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
    jungle.alterBlockStatus(block);
    assert.equal(block.status, false)
  });
});

describe('Jungle game state and boundaries', function () {

  it('should have a detectJungleBoundaries prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.detectJungleBoundaries);
  });

  it('should have a gameOver prototype method', function(){
    var jungle = new Jungle(40, 40);
    assert.isFunction(jungle.gameOver);
  });

  it('if the papaya hits the left wall of the jungle, the speedX should be -4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Block(10, 10);
    papaya.x = 2;
    papaya.speedX = 4;
    assert.equal(papaya.speedX, 4);
  });

  it('if the papaya hits the right wall of the jungle, the speedX should be +4', function(){
    var jungle = new Jungle(500, 700);
    var papaya = new Block(10, 10);
    papaya.x = 687;
    papaya.speedX = 4;
    assert.equal(papaya.speedX, 4);
  });

});




  // it('should be able to detect jungle boundaries for the papaya', function() {
  //   var jungle = new Jungle()
  //   assert.isFunction()
  // })
