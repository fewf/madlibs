/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/MadlibStory.css');

var MadlibStory = React.createClass({
	render: function () {
		return (
			<div
				className='story'
				dangerouslySetInnerHTML={{__html: this.props.html}} >
			</div>
		);
	}
});

module.exports = MadlibStory;
