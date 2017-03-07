/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import merge from 'lodash/merge';
import EditQuestion from './edit_question';

const EditMultipleChoiceQuestion = React.createClass({

    propTypes: {
        key: React.PropTypes.number.isRequired,
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
                    <input type="text" className="small" value={option} />
                    <a className="remove-option">
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
                        <a>
                            <span className='glyphicon glyphicon-plus'/>
                            Add option
                        </a>
                    </li>
                </ul>
            </EditQuestion>
        )
    },

    handleDescriptionChange: function (ev) {
        var question = merge(this.props.question, { description: ev.target.value });
        this.props.onChange(this.props.key, question);
    },

    handleRemove: function () {
        this.props.onRemove(this.props.key);
    }
});

export default EditMultipleChoiceQuestion;