import './slice-translations-list.less';

import { connect } from 'react-redux';

import SliceTranslationsList from './slice-translations-list';

export default connect((state, ownProps) => ({
    slice: state.slices[ownProps.sliceId],
    translations: state.translations,
}))(SliceTranslationsList);
