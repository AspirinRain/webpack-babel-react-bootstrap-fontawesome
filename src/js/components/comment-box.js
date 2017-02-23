/**
 * Created by ChenShuai on 2017/2/21.
 */
import React from 'react';

export class CommentList extends React.Component {
    render() {
        return (
            <div className="commentList">
                Hello, world! I am a commentList.
            </div>
        );
    }
}

export class CommentForm extends React.Component {
    render() {
        return (
            <div className="commentForm">
                Hello, world! I am a commentForm.
            </div>
        );
    }
}

export default class CommentBox extends React.Component {
    render() {
        return (
            <div className="commentBox">
                <div>Hello, world! I am a commentBox.</div>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}