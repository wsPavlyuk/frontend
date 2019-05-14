import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    CHECK_REQUEST,
    CHECK_SUCCESS,
    CHECK_FAILURE,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
 } from '../types/auth.types'

export const registerRequest = () => {
    return {
        type: REGISTER_REQUEST
    }
}

export const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload: payload
    }
}

export const registerFailure = (payload) => {
    return {
        type: REGISTER_FAILURE,
        payload: payload
    }
}

export const checkRequest = () => {
    return {
        type: CHECK_REQUEST
    }
}

export const checkSuccess = (payload) => {
    return {
        type: CHECK_SUCCESS,
        payload: payload
    }
}

export const checkFailure = (payload) => {
    return {
        type: CHECK_FAILURE,
        payload: payload
    }
}

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
