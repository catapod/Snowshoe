import { createSelector } from 'reselect';
import { getChunkComments } from './chunks';

const getCommentsById = state => state.comments;
export const getComments = createSelector(
    getChunkComments,
    getCommentsById,
    (order, items) => order.map(id => items[id])
);
