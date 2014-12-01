/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var Blank = require('./Blank');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

// read and parse madlib json
var madlib = require('../../madlibs/myFirstMadlib.json');

var madlibText = madlib.madlib.join('');

var blankRegex = /%%.+?%%/g;
var madlibBlanks = madlibText.match(blankRegex).map(function(match) {
    // remove templating %'s from matches
    // and ensure first letter is capitalized, rest lower case
    return match.substr(2, 1).toUpperCase() + 
           match.substr(3, match.length - 5).toLowerCase();
});

var MadlibsApp = React.createClass({
    getInitialState: function() {
        return {
            text: madlibText,
            blanks: madlibBlanks,
            filled: [],
            submitted: false
        }
    },
    render: function() {
        var blanks = this.state.blanks;
        if (!this.state.submitted) {
            var inputs = blanks.map(function(blank, i) {
                return (
                    <Blank
                        key={i}
                        pos={blank}
                        handleBlankFilled={this.handleBlankFilled} />
                );
            }, this);

            return (
                <form action="">
                    {inputs}
                    <input type="submit" onClick={this.handleFormSubmit} />
                </form>
            )
        } else {
            var text = this.state.text;
            for (var i = 0; i < blanks.length; i++) {
                text = text.replace(/%%.+?%%/, this.state.filled[i]);
            };

            return (
                <div className='main'>
                    {text}
                </div>
            );            
        }
    },
    handleBlankFilled: function(index, value) {
        var filled = this.state.filled.slice(0);
        filled[index] = value;
        this.setState({filled: filled});
    },
    handleFormSubmit: function(e) {
        this.setState({submitted: true});
        return false;
    }
});

module.exports = MadlibsApp;
