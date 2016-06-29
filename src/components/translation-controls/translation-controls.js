import React from 'react';
import { uiKeys } from '../../constants';

import classNames from 'class-names';

export default ({
    className,
    translateId,
    voteTranslateUp,
    voteTranslateDown,
    commentTranslate,
    voteUpText,
    voteDownText,
    commentText,
}) => {
    let handle = (f) => (event) => {
        event.preventDefault();
        f(translateId);
    };

    return (
        <div className={classNames('translation-controls', className)}>
            <a className='translation-controls__item' href='#' onClick={handle(voteTranslateUp)}>
                {voteUpText || uiKeys.VOTE_UP}
            </a>
            {', '}
            <a className='translation-controls__item' href='#' onClick={handle(voteTranslateDown)}>
                {voteDownText || uiKeys.VOTE_DOWN}
            </a>
            {', '}
            <a className='translation-controls__item' href='#' onClick={handle(commentTranslate)}>
                {commentText || uiKeys.COMMENT_TRANSLATE}
            </a>
        </div>
    );
};
