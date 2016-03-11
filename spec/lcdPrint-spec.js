'use strict';
var lcdPrint = require('../lcdPrint.js');

describe('lcdPrint()', function() {
  it('can change number to shape', function() {
    var shapeString = "... ._. ._. ... ._. ._. ._. ._. ._. ._. \n"
    + "..| ._| ._| |_| |_. |_. ..| |_| |_| |.| \n"
    + "..| |_. ._| ..| ._| |_| ..| |_| ..| |_| \n";

    spyOn(console, 'log');
    lcdPrint('1234567890');

    expect(console.log).toHaveBeenCalledWith(shapeString);
  });
});
