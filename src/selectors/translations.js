import { createSelector } from 'reselect';
import { getChunkTranslations } from './chunks';

const getTranslationsById = state => state.translations;
export const getTranslations = createSelector(
    getChunkTranslations,
    getTranslationsById,
    (order, items) => order.map(id => items[id])
);
