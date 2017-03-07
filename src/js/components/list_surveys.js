/**
 * Created by ChenShuai on 2017/3/6.
 */

import React from 'react';
import SurveyTable from './survey_table';

const ListSurveys = React.createClass({
    getDefaultProps: function () {
        return {
            surveys : [
                {
                    id: 'asd123',
                    uri: 'asd123',
                    editUri: 'ad123',
                    title: 'Superhero mashup',
                    publishedDate: new Date(),
                    modifiedDate: new Date(),
                    activity: [121,32,54,12,300]
                },
                {
                    id: 'asd234',
                    uri: 'asd234',
                    editUri: 'asd234',
                    title: 'Superhero Chen',
                    publishedDate: new Date(),
                    modifiedDate: new Date(),
                    activity: [10,25,30,26,70]
                }
            ]
        };
    },

    getInitialState: function () {
        return {
            surveys: this.props.surveys
        }
    },

    render: function () {
        if (!this.state.surveys){
            return <div>Loading ...</div>
        }

        return (
            <div className="list-surveys">
                <h1>Active Surveys</h1>
                <SurveyTable surveys={this.state.surveys}/>
            </div>
        );
    }
});

export default ListSurveys;