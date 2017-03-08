/**
 * Created by ChenShuai on 2017/3/8.
 */

import React from 'react';
import AnswerMultipleChoiceQuestion from './answer_multiple_choice_question';
import merge from 'lodash/merge';

const AnswerYesNoQuestion = React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        onCompleted: React.PropTypes.func.isRequired
    },

    render: function () {
        let choices = ['YES', 'NO'];
        let props = merge({}, this.props, {
            choices: choices
        });
        return React.createElement(AnswerMultipleChoiceQuestion, props);
    }
});

export default AnswerYesNoQuestion;