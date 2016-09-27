import './translation-rating.less';

import React from 'react';

import classNames from 'class-names';

export default function TranslationRating({ value, className }) {
    return (
        <div className={classNames('translation-rating', className)}>
            {value}
        </div>
    );
}
