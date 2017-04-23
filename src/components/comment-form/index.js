import './comment-form.less';

import React from 'react';

import TextField from '../text-field';

export default class CommentsList extends React.Component {
    render() {
        return (
            <div className='comment-form'>
                <p className='comments-form__title'>Добавить комментарий</p>
                <TextField />
                <div className='comments-form__button comments-form__button--send'></div>
                <div className='comments-form__button comments-form__button--emoji'></div>
                <div className='comments-form__button comments-form__button--add'></div>
            </div>
        );
    }
}
