/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import { Link } from 'react-router';
import SparkLine from './sparkline';

const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

function formatDate(date) {
    return MONTHS[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();
}

function integerWithThousandsSeparator(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const SurveyTableRow = React.createClass({
    propTypes: {
        survey: React.PropTypes.shape({
            id: React.PropTypes.string.isRequired,
            title: React.PropTypes.string.isRequired,
            publishedDate: React.PropTypes.instanceOf(Date).isRequired,
            modifiedDate: React.PropTypes.instanceOf(Date).isRequired,
            activity: React.PropTypes.array.isRequired
        }).isRequired
    },
    
    render: function () {
        const survey = this.props.survey;

        let total = survey.activity.reduce(function (memo, n) {
            return memo + n;
        }, 0);

        return (
            <tr>
                <td>
                    <Link to='take' data-surveyId={survey.id} className='title'>
                        {survey.title}
                    </Link>
                </td>
                <td className="publish">{formatDate(survey.publishedDate)}</td>
                <td className="modified">{formatDate(survey.modifiedDate)}</td>
                <td className="total">{integerWithThousandsSeparator(total)}</td>
                <td className="activity">
                    <SparkLine points={survey.activity}/>
                </td>
                <td>
                    <Link to="edit" data-surveyId={survey.id} className="btn btn-link btn-editSurvey edit">
                        <i className="glyphicon glyphicon-pencil" />
                    </Link>
                </td>
            </tr>
        )
    }
});

export default SurveyTableRow;
