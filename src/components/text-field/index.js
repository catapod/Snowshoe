import './text-field.less';

import React from 'react';

import { connect } from 'react-redux';

import { addTranslate } from '../../actions/translate-actions';
import { addComment } from '../../actions/comment-actions';

import { uiKeys } from '../../constants';


export default class TextField extends React.Component {
    onAddClick(event) {
        event.preventDefault();
        const { chunkId, onAdd } = this.props;

        if (this._textArea.value === '') {
            return;
        }

        onAdd(chunkId, this._textArea.value);
        this._textArea.value = '';
    }

    render() {
        const { buttonText } = this.props;

        return (
            <div className='text-field'>
                <textarea ref={c => this._textArea = c}
                          className='text-field__text'
                          cols='30'
                          rows='5'/>
                <a className='text-field__submit'
                   href='#'
                   onClick={e => this.onAddClick(e)}>
                    {buttonText || uiKeys.ADD_TRANSLATION}
                </a>
            </div>
        );
    }
}

export const TranslationField = connect(null, { onAdd: addTranslate })(TextField);
export const CommentField = connect(null, { onAdd: addComment })(TextField);
