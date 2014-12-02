'use strict';

describe('Blank', function () {
  var Blank, component;

  beforeEach(function () {
    Blank = require('../../../src/scripts/components/Blank.jsx');
    component = Blank();
  });

  it('should create a new instance of Blank', function () {
    expect(component).toBeDefined();
  });
});
