import React from 'react';
import '../styles/comment-form.less';
import emoji from '../assets/emoji.svg';
import attach from '../assets/attach.svg';
import send from '../assets/send.svg';


function CommentForm() {
    return (
        <div className='comment-form'>
            <p className='comment-form__title'>Добавить комментарий</p>
            <div className='comment-form__controls'>
                <textarea
                    className='comment-form__text'
                    cols='30'
                    rows='5'
                />
                <a className='comment-form__submit' href='#' />
            </div>
            <div
                className='comment-form__button comment-form__button--send'
                dangerouslySetInnerHTML={{__html: send}}
            />
            <div
                className='comment-form__button comment-form__button--emoji'
                dangerouslySetInnerHTML={{__html: emoji}}
            />
            <div
                className='comment-form__button comment-form__button--add'
                dangerouslySetInnerHTML={{__html: attach}}
            />
        </div>
    );
}

export default CommentForm;
