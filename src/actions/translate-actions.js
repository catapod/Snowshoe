import { actionTypes } from '../constants';
import { uniqueId } from 'lodash'; // TODO: replace id generator

export const addTranslate = (chunkId, text) => ({
    type: actionTypes.ADD_TRANSLATION,
    payload: {
        chunkId,
        translateId: uniqueId(),
        text
    }
});

export const deleteTranslate = (chunkId, translateId) => ({
    type: actionTypes.REMOVE_TRANSLATION,
    payload: { chunkId, translateId }
});

export const voteTranslateUp = (chunkId, translateId) => ({
    type: actionTypes.VOTE_UP_TRANSLATE,
    payload: translateId
});

export const voteTranslateDown = (chunkId, translateId) => ({
    type: actionTypes.VOTE_DOWN_TRANSLATE,
    payload: translateId
});
