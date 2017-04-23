import './comment.less';

import React from 'react';

export default class Comment extends React.Component {
    render() {
        return (
            <div className='comment'>
                <a href='#' className='comment__author'>{this.props.author}</a>
                <span className='comment__date'>{this.props.date}</span>
                <div className='comment__body'>{this.props.body}</div>
            </div>
        );
    }
}
