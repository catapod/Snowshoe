import React from 'react';
import PropTypes from 'prop-types';
import '../styles/comment-form.less';
import emoji from '../assets/emoji.svg';
import attach from '../assets/attach.svg';
import send from '../assets/send.svg';
import {connect} from 'cerebral/react';
import {tags} from '../constants';


function CommentForm({text, onChange, onSubmit}) {
    return (
        <div className='comment-form'>
            <p className='comment-form__title'>Добавить комментарий:</p>
            <div className='comment-form__controls'>
                <textarea
                    value={text}
                    onChange={onChange}
                    className='comment-form__text'
                    cols='30'
                    rows='5'
                />
                <a className='comment-form__submit' href='#' />
            </div>
            <div
                onClick={onSubmit}
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

CommentForm.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
};

export default connect({
    text: tags.draftCommentText,
    onChange: tags.commentChanged,
    onSubmit: tags.commentSubmitted
}, ({text, onChange, onSubmit}) => ({
    text,
    onChange: (e) => onChange({value: e.target.value}),
    onSubmit: () => onSubmit()
}), CommentForm);
