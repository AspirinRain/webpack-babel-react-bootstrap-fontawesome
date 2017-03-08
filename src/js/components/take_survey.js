/**
 * Created by ChenShuai on 2017/3/8.
 */

import React from 'react';
import TakeSurveyItem from './take_survey_item';
import merge from 'lodash/merge';

const TakeSurvey = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
        onSave: React.PropTypes.func.isRequired
    },

    getInitialState: function () {
        return {
            results: {}
        }
    },

    handleItemCompleted: function (params) {
        let results = this.state.results;
        results[params.id] = params.value;
        this.setState({
            results: results
        });
    },

    render: function () {
        return (
            <div className="survey">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                {this.renderItems()}
                <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
            </div>
        );
    },

    renderItems: function () {
        return this.props.items.map(function (item) {
            let props = merge({}, {
                key: item.id,
                item: item,
                onCompleted: this.handleItemCompleted
            });
            return React.createElement(TakeSurveyItem, props);
        }.bind(this));
    },

    handleClick: function () {
        this.props.onSave(this.state.results);
    }
});

export default TakeSurvey;