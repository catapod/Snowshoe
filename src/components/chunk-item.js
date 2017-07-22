import React from 'react';
import {connect} from 'cerebral/react';
import {tags} from '../constants';
import PropTypes from 'prop-types';
import TranslationList from './translation-list';
import '../styles/chunk-item.less';
import sn from 'class-names';
import bookmark from '../assets/bookmark.svg';
import comments from '../assets/comments.svg';


function ChunkItem({id, text, active, onClick}) {
    return (
        <div className={sn('chunk-item', {'chunk-item_active': active})} onClick={onClick}>
            <div className='chunk-item__original'>
                <div className='chunk-item__left-icons'>
                    <span
                        className='chunk-item__mark'
                        dangerouslySetInnerHTML={{__html: bookmark}}
                    />
                    <span
                        className='chunk-item__comments'
                        dangerouslySetInnerHTML={{__html: comments}}
                    />
                    <p className='chunk-item__comments-count'>4</p>
                </div>
                <div className='chunk-item__text'>
                    {text}
                    <p className='chunk-item__info'>
                        <span><a className='chunk-item__number'>#127</a> </span>
                        Дополнительная информация
                    </p>
                </div>
            </div>
            <div className='chunk-item__translate'>
                <TranslationList chunkId={id} expanded={active} />
            </div>
        </div>
    );
}

ChunkItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

export default connect({
    text: tags.chunkText,
    onClick: tags.chunkClicked
}, ({text, onClick}, {id, active}) => ({
    id,
    text,
    active,
    onClick: () => onClick({id})
}), ChunkItem);
