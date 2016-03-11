'use strict';
var splitInput = require('./src/splitInput.js');
var replace = require('./src/replace.js');
var print = require('./src/print.js');

function lcdPrint(input) {
  let numberArrays = splitInput(input);
  let shapeArrays = replace(numberArrays);
  let shapeString = print(shapeArrays);

  console.log(shapeString);
}

module.exports = lcdPrint;
