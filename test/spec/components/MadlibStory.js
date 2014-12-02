'use strict';

describe('MadlibStory', function () {
  var MadlibStory, component;

  beforeEach(function () {
    MadlibStory = require('../../../src/scripts/components/MadlibStory.jsx');
    component = MadlibStory();
  });

  it('should create a new instance of MadlibStory', function () {
    expect(component).toBeDefined();
  });
});
