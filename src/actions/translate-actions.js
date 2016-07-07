import { actionTypes } from '../constants';
import { uniqueId } from 'lodash'; // TODO: replace id generator

export function addTranslate(id, text) {
    const translateId = uniqueId();
    return {
        type: actionTypes.ADD_TRANSLATION,
        id,
        translateId,
        text
    };
}

export function removeTranslate(id, translateId) {
    return {
        type: actionTypes.REMOVE_TRANSLATION,
        id,
        translateId
    };
}

export function updateTranslate(id, translateId, text) {
    return {
        type: actionTypes.UPDATE_TRANSLATION,
        id,
        translateId,
        text
    };
}

export function voteTranslateUp(translateId) {
    return {
        type: actionTypes.VOTE_UP_TRANSLATE,
        translateId
    };
}

export function voteTranslateDown(translateId) {
    return {
        type: actionTypes.VOTE_DOWN_TRANSLATE,
        translateId
    };
}


export function commentTranslate(translateId) {
    return {
        type: actionTypes.COMMENT_TRANSLATE,
        translateId
    };
}
