import React from 'react';
import PropTypes from 'prop-types';
import uiKeys from '../constants/ui-keys';
import {connect} from 'cerebral/react';
import {tags, parts} from '../constants';
import TranslationItem from './translation-item';
import '../styles/translation-list.less';
import sn from 'class-names';


function TranslationList({chunkId, items = [], activeTranslateId, expanded, haveDraft}) {
    const [firstItem, ...restItems] = items;
    const restCount = restItems.length;

    return (
        <div className={sn('translation-list')}>
            {haveDraft && (
                <TranslationItem
                    key={parts.draftId}
                    id={parts.draftId}
                    chunkId={chunkId}
                    edit
                />
            )}
            {firstItem && (
                <TranslationItem
                    key={firstItem}
                    id={firstItem}
                    chunkId={chunkId}
                    edit={firstItem === activeTranslateId}
                />)}
            {expanded
                ? restItems.map(item => (
                    <TranslationItem
                        key={item}
                        id={item}
                        chunkId={chunkId}
                        edit={item === activeTranslateId}
                    />
                ))
                : (restCount > 0 && (
                    <div className={sn('translation-list__more')}>
                        {uiKeys.showMore} {restCount}
                    </div>
                ))}
        </div>
    );
}

TranslationList.propTypes = {
    chunkId: PropTypes.number,
    items: PropTypes.array,
    activeTranslateId: PropTypes.number,
    expanded: PropTypes.bool,
    haveDraft: PropTypes.bool
};

export default connect({
    items: tags.translationIds,
    activeTranslateId: tags.activeTranslateId
}, ({items, activeTranslateId}, {expanded, chunkId}) => ({
    chunkId,
    items,
    expanded,
    activeTranslateId,
    haveDraft: expanded && activeTranslateId === parts.draftId
}), TranslationList);
