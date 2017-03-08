/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import TakeSurvey from './take_survey';
import merge from 'lodash/merge';
import mockSurveyData from '../mock_survey_data';

const TakeSurveyCtrl = React.createClass({
    propTypes: {
        survey_id: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            survey_id: null
        };
    },

    getInitialState: function () {
        return {
            survey: mockSurveyData
        };
    },

    handleSurveySave: function () {

    },

    render: function () {
        let props = merge({}, this.state.survey, {
            onSave: this.handleSurveySave
        });

        return React.createElement(TakeSurvey, props);
    }
});

export default TakeSurveyCtrl;