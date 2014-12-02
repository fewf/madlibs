/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/MadlibForm.css');

var Blank = require('./Blank');

var MadlibForm = React.createClass({
    render: function () {
        var inputs = this.props.blanks.map(function(blank, i) {
            return (
                <Blank
                    key={i}
                    pos={blank}
                    fill={this.props.filled[i]}
                    handleBlankChanged={this.props.handleBlankChanged} />
            );
        }, this);

        return (
            <form
                className="madlib-form"
                action=""
                onSubmit={this.props.handleFormSubmit}>
                <h2>Fill in the Madlib here</h2>
                <ul>
                    {inputs}
                </ul>
                <input
                    className="form-submit"
                    type="submit" />

            </form>
        )
    }
});

module.exports = MadlibForm;
