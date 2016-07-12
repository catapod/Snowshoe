import './translation-area.less';

import { connect } from 'react-redux';

import { addTranslate } from '../../actions/translate-actions';

import TranslationArea from './translation-area';

export default connect(null, {
    addTranslate
})(TranslationArea);
