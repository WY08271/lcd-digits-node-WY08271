'use strict';
var replace = require('../src/replace.js');

describe('replace()', function() {
  it('can replace numberArrays to shapeArrays', function() {
    var numberArrays = ['1', '2'];
    var shapeArrays = [
      ['...', '..|', '..|'],
      ['._.', '._|', '|_.']
    ];

    expect(replace(numberArrays)).toEqual(shapeArrays);
  });
});
