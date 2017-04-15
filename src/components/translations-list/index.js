import './translations-list.less';

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
            <div className='translations-list'>
                {items.map(item => (
                    <div key={item.id} className='translations-list__item'>
                        <div className='translations-list__text'>
                            {item.text}
                        </div>
                        <div className='translations-list__info'>
                            <a href='#' className='translations-list__author'>Chuvak72</a> 12 июня в 12:12
                        </div>
                        <div className='translations-list__indicator'></div>
                        <TranslationRating
                            value={item.rating}/>
                        <TranslationControls
                            sliceId={sliceId}
                            translateId={item.id}/>
                    </div>
                ))}
                <TranslationField sliceId={sliceId}/>
            </div>
        );
    }
}
