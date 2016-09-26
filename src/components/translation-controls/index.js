import React from 'react';
import { uiKeys } from '../../constants';

import classNames from 'class-names';

import { connect } from 'react-redux';
import { voteTranslateUp, voteTranslateDown, deleteTranslate } from '../../actions/translate-actions';


@connect(null, {
    onVoteUp: voteTranslateUp,
    onVoteDown: voteTranslateDown,
    onRemove: deleteTranslate
})
export default class TranslationControls extends React.Component {
    static defaultProps = {
        voteUpText: uiKeys.VOTE_UP,
        voteDownText: uiKeys.VOTE_DOWN,
        deleteText: uiKeys.DELETE
    };

    handleAction(e, action) {
        const { sliceId, translateId } = this.props;
        e.preventDefault();
        action(sliceId, translateId);
    }

    render() {
        const {
            className, onVoteUp, onVoteDown, onRemove,
            voteUpText, voteDownText, deleteText,
        } = this.props;

        return (
            <div className={classNames('translation-controls', className)}>
                <a className='translation-controls__item' href='#'
                   onClick={e => this.handleAction(e, onVoteUp)}>
                    {voteUpText}
                </a>
                {', '}
                <a className='translation-controls__item' href='#'
                   onClick={e => this.handleAction(e, onVoteDown)}>
                    {voteDownText}
                </a>
                {', '}
                <a className='translation-controls__item' href='#'
                   onClick={e => this.handleAction(e, onRemove)}>
                    {deleteText}
                </a>
            </div>
        );
    }
}
