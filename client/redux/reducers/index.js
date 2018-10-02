import { combineReducers } from 'redux';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import postReducer from './postReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    posts: postReducer,
    routing: routerReducer
});