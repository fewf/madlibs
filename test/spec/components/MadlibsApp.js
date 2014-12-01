'use strict';

describe('Main', function () {
  var MadlibsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MadlibsApp = require('../../../src/scripts/components/MadlibsApp.jsx');
    component = MadlibsApp();
  });

  it('should create a new instance of MadlibsApp', function () {
    expect(component).toBeDefined();
  });
});
