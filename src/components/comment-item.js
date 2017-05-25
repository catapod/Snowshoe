import React from 'react';
import PropTypes from 'prop-types';
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

CommentItem.propTypes = {
    author: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string
};

export default CommentItem;
