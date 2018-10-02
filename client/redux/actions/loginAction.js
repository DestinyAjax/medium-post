import { AUTHENTICATE_USER } from '../constants';
import axios from 'axios';

export const authenticateUsers = (data) => dispatch => {
    if(data.email === 'destinyajakaiye@gmail.com' && data.password === 'admin') {
        dispatch({
            type: AUTHENTICATE_USER,
            payload: data,
            is_logged_id: true
        });

        console.log('Login Successful');
    } else {
        console.log('Failed');
    }   
}