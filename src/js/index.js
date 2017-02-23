/**
 * Created by ChenShuai on 2017/2/20.
 */
import $ from 'expose-loader?jQuery!jquery'
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/comment-box';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(<CommentBox />, document.getElementById('content'));

$(document).ready(function () {
    $('#content2').text('jquery loaded');
});