/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Blank = React.createClass({
    render: function () {
        var name = "fill" + this.props.key;
        return (
            <li>
                <label>
                    <input
                        className="blank"
                        type="text"
                        value={this.props.fill}
                        onChange={this.handleChange}
                        required />

                    {this.props.pos}
                </label>
            </li>
        );
    },
    handleChange: function(e) {
        this.props.handleBlankChanged(this.props.key, e.target.value);
    }
});

module.exports = Blank;
