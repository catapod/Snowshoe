import { createSelector } from 'reselect';
import { getSliceComments } from './slices';

const getCommentsById = state => state.comments;
export const getComments = createSelector(
    getSliceComments,
    getCommentsById,
    (order, items) => order.map(id => items[id])
);
