/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';

const typeLabels = {
    yes_no: 'Yes / No',
    multiple_choice: 'Multiple Choice',
    essay: 'Essay'
};

const EditQuestion = React.createClass({
    propTypes: {
        type: React.PropTypes.string.isRequired,
        onRemove: React.PropTypes.func.isRequired
    },

    render: function () {
        var className = 'edit-question well well-active ' + (this.props.className || '');

        return (
            <div>
                <div className={className}>
                    <div className="type">
                        {this.getTypeLabel()}
                        <a className="remove" onClick={this.handleRemove}>
                            <span className='glyphicon glyphicon-remove' />
                        </a>
                    </div>
                    <div>{this.props.children}</div>
                </div>
            </div>
        );
    },

    getTypeLabel: function () {
        return typeLabels[this.props.type];
    },

    handleRemove: function () {
        if (confirm('Are you sure you want to delete this ' + this.getTypeLabel())) {
            this.props.onRemove(this.props.key);
        }
    }
});

export default EditQuestion;