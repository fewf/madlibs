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
                    handleBlankFilled={this.props.handleBlankFilled} />
            );
        }, this);

        return (
            <form
                className="madlib-form"
                action=""
                onSubmit={this.props.handleFormSubmit}>

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
