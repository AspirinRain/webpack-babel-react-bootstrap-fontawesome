/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';

const ModuleButton = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired,
        questionType: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            <div className="btn btn-lg btn-secondary draggable" draggable="true" onDragStart={this.handleDragStart}>
                <span className="glyphicon glyphicon-move" onClick={this.props.onClick}></span>
                {this.props.text}
            </div>
        )
    },

    handleDragStart: function (ev) {
        ev.dataTransfer.setData('questionType', this.props.questionType);
    }
});

export default ModuleButton;