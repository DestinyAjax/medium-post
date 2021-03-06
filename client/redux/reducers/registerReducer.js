import { REGISTER_USER } from '../constants';

const initialState = {
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}