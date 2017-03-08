/**
 * Created by ChenShuai on 2017/3/8.
 */

import React from 'react';

const AnswerEssayQuestion = React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        label: React.PropTypes.string.isRequired,
        onCompleted: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return {
            value: ''
        }
    },

    handleComplete: function (event) {

    },

    render: function () {
        return (
            <div className="form-group">
                <label className="survey-item-label">{this.props.label}</label>
                <div className="survey-item-content">
                    <textarea className="form-control" rows="3" onBlur={this.handleComplete} />
                </div>
            </div>
        );
    }
});

export default AnswerEssayQuestion;