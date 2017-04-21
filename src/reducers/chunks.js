import { combineReducers } from 'redux';
import { actionTypes } from '../constants';
import { assign } from 'lodash';

const updateChunk = (state, action, fieldName, transform) => {
    const { chunkId } = action.payload;
    const fieldValue = state[chunkId][fieldName];

    return assign({}, state, {
        [chunkId]: assign({}, state[chunkId], {
            [fieldName]: transform(fieldValue, action.payload)
        })
    });
};

const byId = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRANSLATION:
            return updateChunk(state, action, 'translations',
                (translations, actionPayload) => [
                    ...translations,
                    actionPayload.translateId
                ]);

        case actionTypes.REMOVE_TRANSLATION:
            return updateChunk(state, action, 'translations',
                (translations, actionPayload) =>
                    translations.filter(t => t !== actionPayload.translateId));

        case actionTypes.ADD_COMMENT:
            return updateChunk(state, action, 'comments',
                (comments, actionPayload) => [
                    ...comments,
                    actionPayload.commentId
                ]);

        case actionTypes.REMOVE_COMMENT:
            return updateChunk(state, action, 'comments',
                (comments, actionPayload) =>
                    comments.filter(t => t !== actionPayload.commentId));

        default:
            return state;
    }
};


const order = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    byId,
    order
});
