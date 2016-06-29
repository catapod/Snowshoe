import { actionTypes } from '../constants';
import { assign } from 'lodash';

const Translation = ({ id, text }) => ({
    id,
    text
});

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD_TRANSLATION:
            return assign({}, state, {
                [action.translateId]: Translation(action)
            });
        default:
            return state;
    }
};
