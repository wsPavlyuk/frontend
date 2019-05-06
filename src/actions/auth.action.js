import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
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
