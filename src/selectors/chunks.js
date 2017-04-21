import { createSelector } from 'reselect';

export const getChunksById = state => state.chunks.byId;
export const getChunksOrder = state => state.chunks.order;
export const getChunkTranslations = (state, chunkId) => state.chunks.byId[chunkId].translations;
export const getChunkComments = (state, chunkId) => state.chunks.byId[chunkId].comments;
export const getChunks = createSelector(
    getChunksOrder,
    getChunksById,
    (order, items) => order.map(id => items[id])
);
