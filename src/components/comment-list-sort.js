import React from 'react';
import '../styles/comment-list-sort.less';
import iconSort from '../assets/sort.svg';


function CommentListSort() {
    return (
        <div className='comment-list-sort comment-list-sort__droplink'>
            <i dangerouslySetInnerHTML={{__html: iconSort}} />
            <div className='comment-list-sort__dropdown'>
                <label className='comment-list-sort__label'>
                    <input type='radio' name='comments-sort' /> Сначала новые
                </label>
                <label className='comment-list-sort__label'>
                    <input type='radio' name='comments-sort' /> Сначала старые
                </label>
            </div>
        </div>
    );
}

export default CommentListSort;
