import { REGISTER_USER } from '../constants';
import axios from 'axios';

export const registerUsers = (data) => dispatch => {
    axios.post('http://localhost:5000/api/users/register', data)
    .then(function(user) {
        dispatch({
            type: REGISTER_USER,
            payload: user
        });
    }).catch(function(err) {
        console.log(data);
    });
}