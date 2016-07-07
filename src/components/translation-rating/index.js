import './translation-rating.less';

import { connect } from 'react-redux';
import TranslationRating from './translation-rating';

export default connect((state, ownProps) => ({
    rating: state.translations[ownProps.translateId].rating || 0
}))(TranslationRating);
