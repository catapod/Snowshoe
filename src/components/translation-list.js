import React from 'react';
import PropTypes from 'prop-types';
import uiKeys from '../constants/ui-keys';
import {connect} from 'cerebral/react';
import {tags, parts} from '../constants';
import TranslationItem from './translation-item';
import sn from 'class-names';
import '../styles/translation-list.less';
import arrow from '../assets/arrow.svg';


function TranslationList({items = [], activeTranslateId, expanded, haveDraft}) {
    const [firstItem, ...restItems] = items;
    const restCount = restItems.length;

    return (
        <div className={sn('translation-list')}>
            {haveDraft && (
                <TranslationItem
                    key={parts.draftId}
                    id={parts.draftId}
                    edit
                />
            )}
            {firstItem && (
                <TranslationItem
                    key={firstItem}
                    id={firstItem}
                    edit={firstItem === activeTranslateId}
                />)}
            {expanded
                ? restItems.map(item => (
                    <TranslationItem
                        key={item}
                        id={item}
                        edit={item === activeTranslateId}
                    />
                ))
                : (restCount > 0 && (
                    <div className={sn('translation-list__more')}>
                        <i className={sn('translation-list__icon')} dangerouslySetInnerHTML={{__html: arrow}} />
                        {uiKeys.showMore} {restCount}
                    </div>
                ))}
        </div>
    );
}

TranslationList.propTypes = {
    items: PropTypes.array,
    activeTranslateId: PropTypes.string,
    expanded: PropTypes.bool,
    haveDraft: PropTypes.bool
};

export default connect({
    items: tags.translationIds,
    activeTranslateId: tags.activeTranslateId
}, ({items, activeTranslateId}, {expanded}) => ({
    items,
    expanded,
    activeTranslateId,
    haveDraft: expanded && activeTranslateId === parts.draftId
}), TranslationList);
