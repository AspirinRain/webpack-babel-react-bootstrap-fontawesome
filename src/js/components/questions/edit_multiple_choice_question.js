/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import merge from 'lodash/merge';
import EditQuestion from './edit_question';

const EditMultipleChoiceQuestion = React.createClass({

    propTypes: {
        _key: React.PropTypes.number.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onRemove: React.PropTypes.func.isRequired,
        question: React.PropTypes.object.isRequired
    },

    render: function () {
        let question = this.props.question;
        let description = question.description || '';
        let options = question.options || [];

        options = options.map(function (option, i) {
            return (
                <li key={i} className="option">
                    <input type="text" className="small" value={option} onChange={this.handleOptionChange.bind(this, i)} />
                    <a className="remove-option" onClick={this.handleOptionRemove.bind(this, i)}>
                        <span className='glyphicon glyphicon-remove'/>
                    </a>
                </li>
            )
        }.bind(this));
        
        return (
            <EditQuestion type="multiple_choice" className='edit-multiple-choice' onRemove={this.handleRemove}>
                <label>Description</label>
                <input type="text" className="description" value={description} onChange={this.handleDescriptionChange}/>

                <label>Options</label>
                <ul className='options list-unstyled'>
                    {options}
                    <li className='add-option'>
                        <a onClick={this.handleOptionAdd}>
                            <span className='glyphicon glyphicon-plus'/>
                            Add option
                        </a>
                    </li>
                </ul>
            </EditQuestion>
        )
    },

    handleDescriptionChange: function (ev) {
        let question = merge(this.props.question, { description: ev.target.value });
        this.props.onChange(this.props._key, question);
    },

    handleOptionAdd: function () {
        let question = this.props.question;
        let options = question.options || [];
        question.options = options.concat('');
        this.props.onChange(this.props._key, question);
    },

    handleOptionChange: function (key, ev) {
        let question = this.props.question;
        question.options[key] = ev.target.value;
        this.props.onChange(this.props._key, question);
    },

    handleOptionRemove: function (key) {
        let question = this.props.question;
        question.options.splice(key, 1);
        this.props.onChange(this.props._key, question);
    },

    handleRemove: function () {
        this.props.onRemove(this.props._key);
    },
});

export default EditMultipleChoiceQuestion;