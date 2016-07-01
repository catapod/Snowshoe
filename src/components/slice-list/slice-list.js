import React from 'react';

import SliceTranslationsList from '../slice-translations-list';

export default ({
    sliceIds,
    slices,
}) => (
    <div className="slice-list">
        {sliceIds.map(id => (
            <div className="slice-list__row">
                <div className="slice-list__cell">{slices[id].text}</div>
                <div className="slice-list__cell">
                    <SliceTranslationsList sliceId={id}/>
                </div>
            </div>
        ))}
    </div>
);
