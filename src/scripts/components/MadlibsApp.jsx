/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var MadlibForm = require('./MadlibForm');
var MadlibStory = require('./MadlibStory');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var MadlibsApp = React.createClass({
    getInitialState: function() {
        // App should be initialized with a string of HTML converted from
        // a markdown document with special templating in props.madlib
        var madlib = this.props.madlib;
        var blankRegex = /%%.+?%%/g;
        // create array of madlib blanks, in order
        var madlibBlanks = madlib.match(blankRegex).map(function(match) {
            // remove templating %'s from matches
            // standardize to lower case
            return match.substr(2, match.length - 4).toLowerCase();
        });

        // initialized filled array, which should always be the same length
        // as madlibBlanks, with all slots initially blank.
        var filled = madlibBlanks.map(function(x) {
            return "";
        });

        return {
            html: madlib,
            blanks: madlibBlanks,
            filled: filled,
            submitted: false
        }
    },
    render: function() {
        var blanks = this.state.blanks;

        var formOrStory;

        if (!this.state.submitted) {
            formOrStory = (
                <MadlibForm
                    blanks={blanks}
                    filled={this.state.filled}
                    handleBlankChanged={this.handleBlankChanged}
                    handleFormSubmit={this.handleFormSubmit} />
            );
        } else {
            var html = this.state.html;
            var safeFilled = this.state.filled.map(function(fill) {
                return this.replaceBrackets(fill);
            }, this);
            // Replace templated blanks with filled content, one at a time.
            // Sanitize Parts-of-speech text for when we allow users to 
            // submit their own madlib markdown docs.

            for (var i = 0; i < blanks.length; i++) {

                html = html.replace(/%%(.+?)%%/, 
                    function(match, capture) {
                        var sanitized = this.replaceBrackets(capture);
                        return  (
                            '<span class="filled-blank">' + 
                                safeFilled[i] + 
                                '<span class="pos">' + 
                                    sanitized +
                                '</span>' +
                            '</span>'
                        );                    
                    }.bind(this));

            };

            formOrStory = (
                <MadlibStory html={html} />
            );
        }

        return (
            <div className='main'>
                {formOrStory}
            </div>
        );
    },
    handleBlankChanged: function(index, value) {
        // updated filled array with new value
        var filled = this.state.filled.slice(0);
        filled[index] = value;
        this.setState({filled: filled});
    },
    handleFormSubmit: function(e) {
        this.setState({submitted: true});
        return false;
    },
    replaceBrackets: function(str) {
        // prevent XSS by removing pointy brackets
        return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
});

module.exports = MadlibsApp;
