import { actionTypes } from '../constants';
import { assign } from 'lodash';

const Translation = ({ id, text }) => ({
    id,
    text
});

const changeRating = (translation, delta) =>
    assign({}, translation, {
        rating: (translation.rating || 0) + delta
    });

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRANSLATION:
            return assign({}, state, {
                [action.translateId]: Translation(action)
            });

        case actionTypes.VOTE_UP_TRANSLATE:
            return assign({}, state, {
                [action.translateId]: changeRating(state[action.translateId], 1)
            });

        case actionTypes.VOTE_DOWN_TRANSLATE:
            return assign({}, state, {
                [action.translateId]: changeRating(state[action.translateId], -1)
            });

        default:
            return state;
    }
};
