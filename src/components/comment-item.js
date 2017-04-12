import React from 'react';
import '../styles/comment-item.less';


function CommentItem({author, date, text}) {
    return (
        <div className='comment-item'>
            <a href='#' className='comment-item__author'>{author}</a>
            <span className='comment-item__date'>{date}</span>
            <div className='comment-item__body'>{text}</div>
        </div>
    );
}

export default CommentItem;