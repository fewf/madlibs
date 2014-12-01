/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Blank.css');

var Blank = React.createClass({
    render: function () {
        return (
            <div>
                <p>{this.props.pos}</p>
                <input
                    type="text"
                    onBlur={this.handleLostFocus}
                    required />
            </div>
        );
    },
    handleLostFocus: function(e) {
        if (e.target.value !== "") {
            this.props.handleBlankFilled(this.props.key, e.target.value);
        }
    }
});

module.exports = Blank;
