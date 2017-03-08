/**
 * Created by ChenShuai on 2017/3/8.
 */

import React from 'react';
import uniqueId from 'lodash/uniqueId';
import AnswerRadioInput from './answer_radio_input';

const AnswerMultipleChoiceQuestion = React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        choices: React.PropTypes.array.isRequired,
        onCompleted: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            id: uniqueId('multiple-choice-'),
            value: this.props.value
        }
    },

    handleChanged: function (value) {
        this.setState({value: value});
    },

    renderChoices: function () {
        return this.props.choices.map(function (choice, i) {
            return React.createElement(AnswerRadioInput, {
                key: i,
                id: 'choice-' + i,
                name: this.state.id,
                label: choice,
                value: choice,
                checked: this.state.value === choice,
                onChange: this.handleChanged
            });
        }.bind(this));
    },
    
    render: function () {
        return (
            <div className="form-group">
                <label className="survey-item-label" htmlFor={this.state.id}>{this.props.label}</label>
                <div className="survey-item-content">
                    {this.renderChoices()}
                </div>
            </div>
        );
    }
});

export default AnswerMultipleChoiceQuestion;