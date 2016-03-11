'use strict';
var print = require('../src/print.js');

describe('print()', function() {
  it('can print shapeArrays', function() {
    var shapeArrays = [
      ['...', '..|', '..|'],
      ['._.', '._|', '|_.']
    ];
    var shapeString = "... ._. \n" + "..| ._| \n" + "..| |_. \n";

    expect(print(shapeArrays)).toEqual(shapeString);
  });
});
