import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'cerebral/react';
import {tags} from '../constants';
import ChunkItem from './chunk-item';
import '../styles/chunk-list.less';
import sn from 'class-names';

function ChunkList({items, activeId}) {
    return (
        <div className={sn('chunk-list')}>
            {items.map(id => (
                <div key={id} className={sn('chunk-list__item')}>
                    <ChunkItem id={id} active={id === activeId} />
                </div>
            ))}
        </div>
    );
}

ChunkList.propTypes = {
    items: PropTypes.array,
    activeId: PropTypes.number
};

export default connect({
    items: tags.chunkIds,
    activeId: tags.activeChunkId
}, ChunkList);