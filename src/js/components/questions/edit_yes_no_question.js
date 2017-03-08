/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import merge from 'lodash/merge';
import EditQuestion from './edit_question';

const EditYesNoQuestion = React.createClass({
    propTypes: {
        _key: React.PropTypes.number.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onRemove: React.PropTypes.func.isRequired,
        question: React.PropTypes.object.isRequired
    },
    
    render: function () {
        const description = this.props.question.description || '';

        return (
            <EditQuestion type="yes_no" onRemove={this.handleRemove}>
                <label>Description</label>
                <input type="text" className="description" value={description} onChange={this.handleChange}/>
            </EditQuestion>
        );
    },
    
    handleChange: function (ev) {
        let question = merge(this.props.question, {description: ev.target.value});
        this.props.onChange(this.props._key, question);
    },
    
    handleRemove: function () {
        this.props.onRemove(this.props._key);
    }
});

export default EditYesNoQuestion;