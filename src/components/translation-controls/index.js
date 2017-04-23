import React from 'react';

import classNames from 'class-names';

import { connect } from 'react-redux';
import { voteTranslateUp, voteTranslateDown, deleteTranslate } from '../../actions/translate-actions';


@connect(null, {
    onVoteUp: voteTranslateUp,
    onVoteDown: voteTranslateDown,
    onRemove: deleteTranslate
})
export default class TranslationControls extends React.Component {
    handleAction(e, action) {
        const { chunkId, translateId } = this.props;
        e.preventDefault();
        action(chunkId, translateId);
    }

    render() {
        const {
            className, onVoteUp, onVoteDown
        } = this.props;

        return (
            <div className={classNames('translation-controls', className)}>
                <a className='translation-controls__plus' href='#'
                   onClick={e => this.handleAction(e, onVoteUp)}>
                </a>
                <a className='translation-controls__minus' href='#'
                   onClick={e => this.handleAction(e, onVoteDown)}>
                </a>
            </div>
        );
    }
}
