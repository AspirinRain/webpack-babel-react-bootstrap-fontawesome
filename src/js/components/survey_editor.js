/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import Divider from './divider';

import DraggableQuestions from './draggable_questions';
import SurveyForm from './survey_form';

import EditYesNoQuestion from './questions/edit_yes_no_question';

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import update from 'react/lib/update';


const SUPPORTED_QUESTIONS = {
    yes_no: EditYesNoQuestion
};

const SurveyEditor = React.createClass({
    getInitialState: function () {
        return {
            dropZoneEntered: false,
            title: '',
            introduction: '',
            questions: []
        };
    },

    render: function () {
        let questions = this.state.questions.map(function (q, i) {

            return React.createElement(SUPPORTED_QUESTIONS[q.type], {
                key: i,
                key2: i,
                onChange: this.handleQuestionChange,
                onRemove: this.handleQuestionRemove,
                question: q
            });
        }.bind(this));

        let dropZoneEntered = '';
        if (this.state.dropZoneEntered) {
            dropZoneEntered = 'drag-enter';
        }

        return (
            <div className="survey-editor">
                <div className="row">
                    <aside className="sidebar col-md-3">
                        <h2>Modules</h2>
                        <DraggableQuestions />
                    </aside>
                    <div className="survey-canvas col-md-9">
                        <SurveyForm
                            title={this.state.title}
                            introduction={this.state.introduction}
                            onChange={this.handleFormChange}
                        />

                        <Divider>Question</Divider>

                        <ReactCSSTransitionGroup
                            transitionName="question"
                            transitionEnterTimeout={100}
                            transitionLeaveTimeout={100}>
                            {questions}
                        </ReactCSSTransitionGroup>

                        <div
                            className={'drop-zone well well-drop-zone ' + dropZoneEntered}
                            onDragOver={this.handleDragOver}
                            onDragEnter={this.handleDragEnter}
                            onDragLeave={this.handleDragLeave}
                            onDrop={this.handleDrop}
                        >
                            Drag and drop a module from the left
                        </div>

                        <div className="actions">
                            <button className="btn btn-lg btn-primary btn-save" onClick={this.handleSaveClicked}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    handleFormChange: function (formData) {
        this.setState(formData);
    },

    handleDragOver: function (ev) {
        ev.preventDefault();
    },

    handleDragEnter: function () {
        this.setState({dropZoneEntered:true});
    },

    handleDragLeave: function () {
        this.setState({dropZoneEntered:false})
    },

    handleDrop: function (ev) {
        let questionType = ev.dataTransfer.getData('questionType');
        let questions = update(this.state.questions, {
            $push: [{type: questionType}]
        });

        this.setState({
            questions: questions,
            dropZoneEntered: false
        })
    },

    handleQuestionChange: function (key, newQuestion) {
        let questions = update(this.state.questions, {
            $splice: [[key, 1, newQuestion]]
        });

        this.setState({questions: questions});
    },

    handleQuestionRemove: function (key) {
        let questions = update(this.state.questions, {
            $splice: [[key, 1]]
        });

        this.setState({questions: questions});
    },

    handleSaveClicked: function () {

    }
});

export default SurveyEditor;