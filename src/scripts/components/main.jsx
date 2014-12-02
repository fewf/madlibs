/** @jsx React.DOM */

var MadlibsApp = require('./MadlibsApp');
var React = require('react');
// var {DefaultRoute, Route, Routes} = require('react-router');

// read and parse madlib
var madlib = require('../../madlibs/myFirstMadlib.md');

React.renderComponent(<MadlibsApp madlib={madlib} />, document.body);
// React.renderComponent((
//   <Routes location="history">
//     <Route path="/" handler={MadlibsApp}>
//     </Route>
//   </Routes>
// ), document.getElementById('content'));
