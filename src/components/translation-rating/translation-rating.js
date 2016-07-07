import React from 'react';

import classNames from 'class-names';

export default ({
    rating,
    className
}) => (
    <div className={classNames('translation-rating', className)} >
        {rating}
    </div>
);
