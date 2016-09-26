import { createSelector } from 'reselect';

export const getSlicesById = state => state.slices.byId;
export const getSlicesOrder = state => state.slices.order;
export const getSliceTranslations = (state, sliceId) => state.slices.byId[sliceId].translations;
export const getSliceComments = (state, sliceId) => state.slices.byId[sliceId].comments;
export const getSlices = createSelector(
    getSlicesOrder,
    getSlicesById,
    (order, items) => order.map(id => items[id])
);
