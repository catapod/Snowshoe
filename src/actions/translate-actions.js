import { actionTypes } from '../constants';
import { uniqueId } from 'lodash'; // TODO: replace id generator

export const addTranslate = (sliceId, text) => ({
    type: actionTypes.ADD_TRANSLATION,
    payload: {
        sliceId,
        translateId: uniqueId(),
        text
    }
});

export const deleteTranslate = (sliceId, translateId) => ({
    type: actionTypes.REMOVE_TRANSLATION,
    payload: { sliceId, translateId }
});

export const voteTranslateUp = (sliceId, translateId) => ({
    type: actionTypes.VOTE_UP_TRANSLATE,
    payload: translateId
});

export const voteTranslateDown = (sliceId, translateId) => ({
    type: actionTypes.VOTE_DOWN_TRANSLATE,
    payload: translateId
});
