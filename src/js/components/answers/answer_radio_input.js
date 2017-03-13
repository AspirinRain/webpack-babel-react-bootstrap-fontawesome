/**
 * Created by ChenShuai on 2017/3/8.
 */

import React from 'react';
import uniqueId from 'lodash/uniqueId';

const AnswerRadioInput = React.createClass({
    propTypes: {
        id: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        onChanged: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return {
            id: uniqueId('radio-'),
            checked: false
        };
    },

    getInitialState: function () {
        return {
            checked: !!this.props.checked
        };
    },

    componentWillReceiveProps: function (nextProps) {
        if (nextProps.checked !== undefined){
            this.setState({
                checked: nextProps.checked
            });
        }
    },

    handleChanged: function (e) {
        let checked = e.target.checked;
        this.setState({checked: checked});
        if (checked) {
            this.props.onChanged(this.props.value);
        }
    },

    render: function () {
        return (
            <div className="radio">
                <label>
                    <input type="radio"
                           name={this.props.name}
                           id={this.props.id}
                           value={this.props.value}
                           checked={this.state.checked}
                           onChange={this.handleChanged}
                    />
                    {this.props.label}
                </label>
            </div>
        );
    }
});

export default AnswerRadioInput;