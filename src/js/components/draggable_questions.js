/**
 * Created by ChenShuai on 2017/3/7.
 */

import React from 'react';
import ModuleButton from './module_button';

const DraggableQuestions = React.createClass({
    render: function () {
        return (
            <ul className="modules list-unstyled">
                <li><ModuleButton text="Yes / No" questionType="yes_no"/></li>
                <li><ModuleButton text="Multiple choice" questionType="multiple_choice"/></li>
                <li><ModuleButton text="Essay" questionType="essay"/></li>
            </ul>
        );
    },

    shouldComponentUpdate: function () {
        return false;
    }
});

export default DraggableQuestions;