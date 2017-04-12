import React from 'react';
import '../styles/comment-list-sort.less';


function CommentListSort() {
    return (
        <div className='comment-list-sort comment-list-sort__droplink'>
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