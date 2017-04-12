import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'cerebral/react';
import {translationRate} from '../computeds';
import {tags} from '../constants';
import sn from 'class-names';
import '../styles/translation-status.less';


function TranslationStatus({rate, onVoteUp, onVoteDown}) {
    return (
        <div className={sn('translation-status')}>
            <div className={sn('translation-status__indicator')} />
            <div className={sn('translation-status__rating')}>
                {rate}
                <div className={sn('translation-status__vote-up')} onClick={onVoteUp} />
                <div className={sn('translation-status__vote-down')} onClick={onVoteDown} />
            </div>
        </div>
    );
}

TranslationStatus.propTypes = {
    rate: PropTypes.number,
    onVoteUp: PropTypes.func,
    onVoteDown: PropTypes.func
};

export default connect({
    rate: translationRate,
    onVoteUp: tags.voteUpClicked,
    onVoteDown: tags.voteDownClicked
}, ({rate, onVoteDown, onVoteUp}, {id}) => ({
    rate,
    onVoteUp: (e) => {
        e.stopPropagation();
        onVoteUp({id});
    },
    onVoteDown: (e) => {
        e.stopPropagation();
        onVoteDown({id});
    }
}), TranslationStatus);