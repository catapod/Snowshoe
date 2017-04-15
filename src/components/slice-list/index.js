import './slice-list.less';

import React from 'react';

import { connect } from 'react-redux';
import { getSlices } from '../../selectors/slices';

import SliceTranslationsList from '../translations-list';

@connect(state => ({
    slices: getSlices(state)
}))
export default class SliceList extends React.Component {
    render() {
        return (
            <div className='slice-list'>
                {this.props.slices.map(slice => (
                    <div key={slice.id} className='slice-list__row'>
                        <div className='original-slice'>
                            <div className='original-slice__left-icons'>
                                <span className='original-slice__mark'></span>
                                <span className='original-slice__comments'></span>
                                <p className='original-slice__comments-count'>4</p>
                            </div>
                            <div className='original-slice__text'>
                                {slice.text}
                                <p className='original-slice__info'>
                                    <span><a className='original-slice__number'>#127</a> </span>
                                    Дополнительная информация
                                </p>
                            </div>
                        </div>
                        <div className='translate-slice'>
                            <SliceTranslationsList sliceId={slice.id}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
