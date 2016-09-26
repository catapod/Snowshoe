import './slice-translations-list.less';

import React from 'react';

import { connect } from 'react-redux';
import { getTranslations } from '../../selectors/translations';

import TranslationArea from '../translation-area';
import TranslationRating from '../translation-rating';
import TranslationControls from '../translation-controls';

@connect((state, props) => ({
    translations: getTranslations(state, props.sliceId)
}))
export default class SliceTranslationsList extends React.Component {
    render() {
        const { sliceId, translations } = this.props;
        return (
            <div className='slice-translations-list'>
                {translations.map(translation => (
                    <div key={translation.id} className='slice-translations-list__item'>
                        <div className='slice-translations-list__text'>{translation.text}</div>
                        <TranslationRating
                            className='slice-translations-list__rating'
                            value={translation.rating}/>
                        <TranslationControls
                            className='slice-translations-list__controls'
                            sliceId={sliceId}
                            translateId={translation.id}/>
                    </div>
                ))}
                <TranslationArea sliceId={sliceId}/>
            </div>
        );
    }
}
