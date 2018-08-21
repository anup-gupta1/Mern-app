import { GET_ERRORS, GET_USERS, GET_CURRENT_USER } from './types';
import axios from 'axios';



// Add User
export const addUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/add', userData)
        .then(res => history.push('/all'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


//Get all users
export const getUsers = () => dispatch => {
    axios.get('/api/users/all')
        .then(res => {
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};


//Get all users
export const getCurrentUser = id => dispatch => {
    axios.get(`api/users/${id}`)
        .then(res => {
            dispatch({
                type: GET_CURRENT_USER,
                payload: res.data
            })
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
};


//update user
export const updateUser = (userData, id, history) => dispatch => {
    console.log("user update action");
    console.log(id);
    axios
        .put(`/api/users/update/${id}`, userData)
        .then(res => history.push('/all'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//delete User
export const deleteUser = id => dispatch => {
    axios
        .delete(`/api/users/${id}`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        }
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};