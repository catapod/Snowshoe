import { actionTypes } from '../constants';
import { assign } from 'lodash';

const Translation = ({ translateId, text, rating = 0 }) => ({
    id: translateId,
    text,
    rating
});

const changeRating = (translation, delta) =>
    assign({}, translation, {
        rating: (translation.rating || 0) + delta
    });

export default (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_TRANSLATION:
            return assign({}, state, {
                [payload.translateId]: Translation(payload)
            });

        case actionTypes.REMOVE_TRANSLATION:
            delete state[payload.translateId];
            return assign({}, state);

        case actionTypes.VOTE_UP_TRANSLATE:
            return assign({}, state, {
                [payload]: changeRating(state[payload], 1)
            });

        case actionTypes.VOTE_DOWN_TRANSLATE:
            return assign({}, state, {
                [payload]: changeRating(state[payload], -1)
            });

        default:
            return state;
    }
};
