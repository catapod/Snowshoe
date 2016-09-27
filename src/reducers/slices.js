import { combineReducers } from 'redux';
import { actionTypes } from '../constants';
import { assign } from 'lodash';

const updateSlice = (state, action, fieldName, transform) => {
    const { sliceId } = action.payload;
    const fieldValue = state[sliceId][fieldName];

    return assign({}, state, {
        [sliceId]: assign({}, state[sliceId], {
            [fieldName]: transform(fieldValue, action.payload)
        })
    });
};

const byId = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRANSLATION:
            return updateSlice(state, action, 'translations',
                (translations, actionPayload) => [
                    ...translations,
                    actionPayload.translateId
                ]);

        case actionTypes.REMOVE_TRANSLATION:
            return updateSlice(state, action, 'translations',
                (translations, actionPayload) =>
                    translations.filter(t => t !== actionPayload.translateId));

        case actionTypes.ADD_COMMENT:
            return updateSlice(state, action, 'comments',
                (comments, actionPayload) => [
                    ...comments,
                    actionPayload.commentId
                ]);

        case actionTypes.REMOVE_COMMENT:
            return updateSlice(state, action, 'comments',
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
