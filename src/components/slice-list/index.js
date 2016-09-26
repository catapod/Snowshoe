import './slice-list.less';

import React from 'react';

import { connect } from 'react-redux';
import { getSlices } from '../../selectors/slices';

import SliceTranslationsList from '../slice-translations-list';

@connect(state => ({
    slices: getSlices(state)
}))
export default class SliceList extends React.Component {
    render() {
        return (
            <div className='slice-list'>
                {this.props.slices.map(slice => (
                    <div key={slice.id} className='slice-list__row'>
                        <div className='slice-list__cell'>{slice.text}</div>
                        <div className='slice-list__cell'>
                            <SliceTranslationsList sliceId={slice.id}/>
                        </div>
                        <div className='slice-list__cell'>
                            комментировать
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
