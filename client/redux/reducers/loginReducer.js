import { AUTHENTICATE_USER } from '../constants';

const initialState = {
    user: {},
    is_logged_in: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case AUTHENTICATE_USER:
            return {
                ...state,
                user: action.payload,
                is_logged_in: action.is_logged_in
            }
        default:
            return state;
    }
}