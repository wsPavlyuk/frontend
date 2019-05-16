import {
    HISTORY_REQUEST,
    HISTORY_SUCCESS,
    HISTORY_FAILURE,

    GET_HISTORY_REQUEST,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILURE,
    
    DETAILS_REQUEST,
    DETAILS_SUCCESS,
    DETAILS_FAILURE
 } from '../types/history.types';


 //save history and save data in store
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

//get history

export const getHistoryRequest = () => {
    return {
        type: GET_HISTORY_REQUEST
    }
}

export const getHistorySuccess = (payload) => {
    return {
        type: GET_HISTORY_SUCCESS,
        payload: payload
    }
}

export const getHistoryFailure = (payload) => {
    return {
        type: GET_HISTORY_FAILURE,
        payload: payload
    }
}


//get history details

export const detailsRequest = () => {
    return {
        type: DETAILS_REQUEST
    }
}

export const detailsSuccess = (payload) => {
    return {
        type: DETAILS_SUCCESS,
        payload: payload
    }
}

export const detailsFailure = (payload) => {
    return {
        type: DETAILS_FAILURE,
        payload: payload
    }
}
