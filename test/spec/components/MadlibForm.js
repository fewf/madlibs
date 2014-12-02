'use strict';

describe('MadlibForm', function () {
  var MadlibForm, component;

  beforeEach(function () {
    MadlibForm = require('../../../src/scripts/components/MadlibForm.jsx');
    component = MadlibForm();
  });

  it('should create a new instance of MadlibForm', function () {
    expect(component).toBeDefined();
  });
});
