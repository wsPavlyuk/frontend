import {
    HISTORY_REQUEST,
    HISTORY_SUCCESS,
    HISTORY_FAILURE
 } from '../types/history.types';

 export const historyRequest = () => {
    return {
        type: HISTORY_REQUEST
    }
}

export const historySuccess = (payload) => {
    return {
        type: HISTORY_SUCCESS,
        payload: payload
    }
}

export const historyFailure = (payload) => {
    return {
        type: HISTORY_FAILURE,
        payload: payload
    }
}
