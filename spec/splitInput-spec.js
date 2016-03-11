'use strict';

var splitInput = require('../src/splitInput');

describe('splitInput()', function() {
  it('can split input to array', function() {
    expect(splitInput('1234')).toEqual(['1', '2', '3', '4']);
  });
});
