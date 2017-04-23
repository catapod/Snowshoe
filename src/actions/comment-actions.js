import { actionTypes } from '../constants';
import { uniqueId } from 'lodash'; // TODO: replace id generator

export const addComment = (chunkId, text) => ({
    type: actionTypes.ADD_COMMENT,
    payload: { chunkId, text, commentId: uniqueId() }
});

export const removeComment = (chunkId, commentId) => ({
    type: actionTypes.REMOVE_COMMENT,
    payload: { chunkId, commentId }
});
