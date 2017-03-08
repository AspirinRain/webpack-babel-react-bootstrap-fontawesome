/**
 * Created by ChenShuai on 2017/3/8.
 */

import React from 'react';

import AnswerYesNoQuestion from './answer_yes_no_question';
import AnswerMultipleChoiceQuestion from './answer_multiple_choice_question';
import AnswerEssayQuestion from './answer_essay_question';

const answerTypeMap = {
    yes_no: AnswerYesNoQuestion,
    multiple_choice: AnswerMultipleChoiceQuestion,
    essay: AnswerEssayQuestion
};

const getAnswerClass = function (type) {
    if (answerTypeMap[type] !== undefined) {
        return answerTypeMap[type];
    }
};

export default { getAnswerClass : getAnswerClass };