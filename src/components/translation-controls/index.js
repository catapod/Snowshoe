import { connect } from 'react-redux';

import { voteTranslateUp, voteTranslateDown, commentTranslate } from '../../actions/translate-actions';

import TranslationControls from './translation-controls';

export default connect(null, {
    voteTranslateUp,
    voteTranslateDown,
    commentTranslate,
})(TranslationControls);
