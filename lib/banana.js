
var $ = require('jquery');
var _ = require('lodash');

function makeBanana() {
  $('.banana').append('BANANA');
}

function makeHorse() {
  $('.banana').append('Horse');
}

var makeFunctions = {
  makeBanan: makeBanana;
  makeHorse: makeHorse;
}

module.exports = makeFunctions;
