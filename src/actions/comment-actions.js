import { actionTypes } from '../constants';
import { uniqueId } from 'lodash'; // TODO: replace id generator

export const addComment = (sliceId, text) => ({
    type: actionTypes.ADD_COMMENT,
    payload: { sliceId, text, commentId: uniqueId() }
});

export const removeComment = (sliceId, commentId) => ({
    type: actionTypes.REMOVE_COMMENT,
    payload: { sliceId, commentId }
});
