/** @jsx React.DOM */

var MadlibsApp = require('./MadlibsApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={MadlibsApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
