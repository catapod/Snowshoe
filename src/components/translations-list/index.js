import './translations-list.less';

import React from 'react';

import { connect } from 'react-redux';
import { getTranslations } from '../../selectors/translations';

import { TranslationField } from '../text-field';
import Translation from '../translation';

@connect((state, props) => ({
    items: getTranslations(state, props.chunkId)
}))
export default class TranslationsList extends React.Component {
    render() {
        const { chunkId, items } = this.props;
        return (
            <div className='translations-list'>
                {items.map(item => (
                    <div key={item.id} className='translations-list__item'>
                        <Translation chunkId={chunkId} {...item}/>
                    </div>
                ))}
                <TranslationField chunkId={chunkId}/>
            </div>
        );
    }
}
