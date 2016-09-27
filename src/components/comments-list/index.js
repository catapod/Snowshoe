import './comments-list.less';

import React from 'react';

import { connect } from 'react-redux';
import { getComments } from '../../selectors/comments';
import { removeComment } from '../../actions/comment-actions';

import { CommentField } from '../text-field';
import { uiKeys } from '../../constants';

@connect((state, props) => ({
    items: getComments(state, props.sliceId)
}), {
    onDelete: removeComment
})
export default class CommentsList extends React.Component {
    delete(e, commentId) {
        e.preventDefault();

        const { onDelete, sliceId } = this.props;
        onDelete(sliceId, commentId);
    }

    render() {
        const { sliceId, items } = this.props;

        return (
            <div className='comments-list'>
                <div className='comments-list__items'>
                    {items.map(item => (
                        <div className='comments-list__item'>
                            <div className='comments-list__item-text'>
                                {item.text}
                            </div>
                            <a className='comments-list__item-button'
                               href='#'
                               onClick={e => this.delete(e, item.id)}>
                                {uiKeys.DELETE}
                            </a>
                        </div>
                    ))}
                </div>
                <CommentField sliceId={sliceId} buttonText={uiKeys.ADD_COMMENT}/>
            </div>
        );
    }
}
