import React from 'react';
import '../styles/comment-list-sort.less';
import iconSort from '../assets/sort.svg';


function CommentListSort() {
    return (
        <div className='comment-list-sort comment-list-sort__droplink'>
            <i dangerouslySetInnerHTML={{__html: iconSort}} />
            <div className='comment-list-sort__dropdown'>
                <input id='first-new' type='radio' name='comments-sort' className='comment-list-sort__input'/>
                <label htmlFor='first-new'>Сначала новые</label>
                <input id='first-old' type='radio' name='comments-sort' className='comment-list-sort__input'/>
                <label htmlFor='first-old'>Сначала старые</label>
            </div>
        </div>
    );
}

export default CommentListSort;
