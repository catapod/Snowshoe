import { actionTypes } from '../constants';
import { assign } from 'lodash';

const Comment = ({ commentId, text }) => ({
    id: commentId,
    text
});

export default (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_COMMENT:
            return assign({}, state, {
                [payload.commentId]: Comment(payload)
            });

        case actionTypes.REMOVE_COMMENT:
            delete state[payload.commentId];
            return assign({}, state);

        default:
            return state;
    }
};
