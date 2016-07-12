import React from 'react';
import { uiKeys } from '../../constants';

export default ({
    sliceId,
    addTranslate,
    addButtonText,
}) => {
    let textArea;
    let onAddClick = event => {
        event.preventDefault();

        if (textArea.value === '') {
            return;
        }

        addTranslate(sliceId, textArea.value);
        textArea.value = '';
    };

    return (
        <div className="translation-area">
            <textarea ref={c => textArea = c}
                      className="translation-area__text"
                      cols="30"
                      rows="5"
            />
            <a className="translation-area__submit" href="#" onClick={onAddClick}>
                {addButtonText || uiKeys.ADD_TRANSLATION}
            </a>
        </div>
    );
};
