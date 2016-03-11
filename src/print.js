'use strict';

function print(shapeArrays) {
  let shapeString = '';

  for (var i = 0; i < 3; i++) {
    shapeString += joinShapeArrays(shapeArrays, i) + '\n';
  }

  return shapeString;
}

function joinShapeArrays(shapeArrays, i) {
  let shapeString = '';

  shapeArrays.forEach(function(shapeArray) {
    shapeString += shapeArray[i] + ' ';
  });

  return shapeString;
}

module.exports = print;
