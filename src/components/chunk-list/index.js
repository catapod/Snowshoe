import './chunk-list.less';

import React from 'react';

import { connect } from 'react-redux';
import { getChunks } from '../../selectors/chunks';

import TranslationsList from '../translations-list';

@connect(state => ({
    chunks: getChunks(state)
}))
export default class ChunkList extends React.Component {
    render() {
        return (
            <div className='chunk-list'>
                {this.props.chunks.map(chunk => (
                    <div key={chunk.id} className='chunk-list__row'>
                        <div className='original-chunk'>
                            <div className='original-chunk__left-icons'>
                                <span className='original-chunk__mark'></span>
                                <span className='original-chunk__comments'></span>
                                <p className='original-chunk__comments-count'>4</p>
                            </div>
                            <div className='original-chunk__text'>
                                {chunk.text}
                                <p className='original-chunk__info'>
                                    <span><a className='original-chunk__number'>#127</a> </span>
                                    Дополнительная информация
                                </p>
                            </div>
                        </div>
                        <div className='translate-chunk'>
                            <TranslationsList chunkId={chunk.id}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
