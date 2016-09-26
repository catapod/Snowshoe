import './translation-area.less';

import React from 'react';

import { connect } from 'react-redux';

import { addTranslate } from '../../actions/translate-actions';

import { uiKeys } from '../../constants';


@connect(null, {
    addTranslate
})
export default class TranslationArea extends React.Component {
    onAddClick(event) {
        event.preventDefault();
        const { sliceId, addTranslate: add } = this.props;

        if (this._textArea.value === '') {
            return;
        }

        add(sliceId, this._textArea.value);
        this._textArea.value = '';
    }

    render() {
        const { addButtonText } = this.props;

        return (
            <div className='translation-area'>
                <textarea ref={c => this._textArea = c}
                          className='translation-area__text'
                          cols='30'
                          rows='5'/>
                <a className='translation-area__submit'
                   href='#'
                   onClick={e => this.onAddClick(e)}>
                    {addButtonText || uiKeys.ADD_TRANSLATION}
                </a>
            </div>
        );
    }
}
