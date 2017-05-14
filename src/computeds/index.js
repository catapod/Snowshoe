import reduce from 'lodash/reduce';
import {compute} from 'cerebral';
import {tags} from '../constants';

export const translationRate = compute(
    tags.translationRates,
    (rates) => reduce(rates, (sum, rate) => sum + rate.value, 0)
);

export const comments = compute(
    tags.comments,
    tags.activeChunkId,
    (commentMap, activeCunkId) => reduce(
        commentMap,
        (items, item) => (
            item.parentId === activeCunkId
                ? [...items, item]
                : items
        ),
        []
    )
);
