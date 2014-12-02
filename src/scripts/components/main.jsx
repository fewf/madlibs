/** @jsx React.DOM */

var MadlibsApp = require('./MadlibsApp');
var React = require('react');

// read and parse madlib
var madlib = require('../../madlibs/myFirstMadlib.md');

React.renderComponent(<MadlibsApp madlib={madlib} />, document.body);
