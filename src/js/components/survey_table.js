/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import SurveyTableRow from './survey_table_row';

const SurveyTable = React.createClass({
    propTypes: {
        surveys: React.PropTypes.array.isRequired
    },

    render: function() {
        let rows = this.props.surveys.map(function (survey, i) {
            return <SurveyTableRow key={i} survey={survey}/>
        });

        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Published On</th>
                    <th>Last Active</th>
                    <th>Completions</th>
                    <th>Activity</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

export default SurveyTable;