import { combineReducers } from 'redux';
import { actionTypes } from '../constants';
import { assign } from 'lodash';

const byId = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_TRANSLATION:
            return assign({}, state, {
                [payload.sliceId]: assign({}, state[payload.sliceId], {
                    translations: [
                        ...state[payload.sliceId].translations,
                        payload.translateId
                    ]
                })
            });
        case actionTypes.REMOVE_TRANSLATION:
            const { sliceId, translateId } = payload;

            return assign({}, state, {
                [sliceId]: assign({}, state[sliceId], {
                    translations: state[sliceId].translations
                        .filter(t => t !== translateId)
                })
            });

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
