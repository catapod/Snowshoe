import React from 'react';

import TranslationArea from '../translation-area';
import TranslationRating from '../translation-rating';
import TranslationControls from '../translation-controls';

export default ({
    slice,
    translations,
}) => (
    <div className="slice-translations-list">
        {slice.translations.map(id => (
            <div className="slice-translations-list__item">
                <div className="slice-translations-list__text">{translations[id].text}</div>
                <TranslationRating className="slice-translations-list__rating" translateId={id}/>
                <TranslationControls className="slice-translations-list__controls" translateId={id}/>
            </div>
        ))}
        <TranslationArea sliceId={slice.id}/>
    </div>
);
