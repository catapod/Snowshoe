import './translation.less';

import React from 'react';

import TranslationRating from '../translation-rating';
import TranslationControls from '../translation-controls';

export default class Translation extends React.Component {
    render() {
        const { id, chunkId, body, rating } = this.props;
        return (
            <div className='translation'>
                <div className='translation__body'>
                    {body}
                </div>
                <div className='translation__info'>
                    <a href='#' className='translation__author'>Chuvak72</a> 12 июня в 12:12
                </div>
                <a href='#' className='translation__show-more'>Показать еще 3</a>
                <div className='translation__indicator'></div>
                <TranslationRating
                    value={rating}/>
                <TranslationControls
                    chunkId={chunkId}
                    translateId={id}/>
            </div>
        );
    }
}
