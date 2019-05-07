import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
 } from '../types/login.types';

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload: payload.response.data
    }
}
