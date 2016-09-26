import './slice-translations-list.less';

import React from 'react';

import { connect } from 'react-redux';
import { getTranslations } from '../../selectors/translations';

import { TranslationField } from '../text-field';
import TranslationRating from '../translation-rating';
import TranslationControls from '../translation-controls';

@connect((state, props) => ({
    items: getTranslations(state, props.sliceId)
}))
export default class SliceTranslationsList extends React.Component {
    render() {
        const { sliceId, items } = this.props;
        return (
            <div className='slice-translations-list'>
                {items.map(item => (
                    <div key={item.id} className='slice-translations-list__item'>
                        <div className='slice-translations-list__text'>{item.text}</div>
                        <TranslationRating
                            className='slice-translations-list__rating'
                            value={item.rating}/>
                        <TranslationControls
                            className='slice-translations-list__controls'
                            sliceId={sliceId}
                            translateId={item.id}/>
                    </div>
                ))}
                <TranslationField sliceId={sliceId}/>
            </div>
        );
    }
}
