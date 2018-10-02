import { GET_ALL_POST } from '../constants';
import axios from 'axios';

export const getAllPosts = () => dispatch => {
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    .then(posts => {
        dispatch({
            type: GET_ALL_POST,
            payload: posts
        });
    }).catch(function(err) {
        console.log(err);
    })
}