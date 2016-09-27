import { createSelector } from 'reselect';
import { getSliceTranslations } from './slices';

const getTranslationsById = state => state.translations;
export const getTranslations = createSelector(
    getSliceTranslations,
    getTranslationsById,
    (order, items) => order.map(id => items[id])
);
