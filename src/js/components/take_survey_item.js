/**
 * Created by ChenShuai on 2017/3/8.
 */

import React from 'react';
import AnswerFactory from './answers/answer_factory';
import merge from 'lodash/merge';

const TakeSurveyItem = React.createClass({
    getDefaultProps: function () {
        return {
            onCompleted: function () {},
            item: {}
        }
    },

    handleItemCompleted: function (value) {

    },

    getSurveyItemClass: function () {
        return AnswerFactory.getAnswerClass(this.props.item.type);
    },

    renderSurveyItem: function () {
        let ItemComponentClass = this.getSurveyItemClass();
        let props = merge({}, this.props.item.meta, {
            onCompleted: this.handleItemCompleted
        });
        return React.createElement(ItemComponentClass, props);
    },

    render: function () {
        return (
            <div className="survey-item">
                {this.renderSurveyItem()}
            </div>
        )
    }
});

export default TakeSurveyItem;