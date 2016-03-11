'use strict';
var loadNumberShapes = require('./loadNumberShapes.js');

function replace(numberArrays) {
  let shapes = loadNumberShapes();
  let shapeArrays = [];

  numberArrays.forEach(function(numberArray) {
    shapeArrays.push(shapes[numberArray]);
  });

  return shapeArrays;
}

module.exports = replace;
