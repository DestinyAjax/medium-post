import { GET_ALL_POST } from '../constants';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ALL_POST:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}