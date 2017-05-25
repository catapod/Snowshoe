import React from 'react';
import PropTypes from 'prop-types';
import '../styles/comment-list.less';
import CommentItem from './comment-item';
import CommentListSort from './comment-list-sort';
import CommentForm from './comment-form';
import {connect} from 'cerebral/react';
import {comments} from '../computeds';


function CommentList({items}) {
    return (
        <div className='comment-list'>
            <div className='comment-list__head'>
                <CommentListSort />
                <p className='comment-list__title'>Комментарии</p>
            </div>
            {items.map(item => (
                <div key={item.comment_id} className='comment-list__item'>
                    <CommentItem
                        author={item.commentator.nickname}
                        date={item.created_at}
                        text={item.body}
                    />
                </div>
            ))}
            <CommentForm />
        </div>
    );
}

CommentList.propTypes = {
    items: PropTypes.array
};

export default connect({
    items: comments
}, CommentList);
