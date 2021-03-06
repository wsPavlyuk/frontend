import {
    historyRequest,
    historySuccess,
    historyFailure,

    getHistoryRequest,
    getHistorySuccess,
    getHistoryFailure,

    detailsRequest,
    detailsSuccess,
    detailsFailure
} from '../actions/history.action'
import database from '../api/database';

export const saveHistory = (data) => {
    return async dispatch => {
        try {
            // console.log('DataWeather', data);
            // console.log('dispatch', dispatch)
            dispatch(historyRequest());
            const response = await database.post('/api/histories/create', data);
            dispatch(historySuccess(response.data))
        } catch (err) {
            dispatch(historyFailure(err))
        }
    }
}

export const getHistory = () => {
    return async dispatch => {
        try {
            // console.log('dispatch', dispatch)
            dispatch(getHistoryRequest());
            const response = await database.get('/api/histories');
            dispatch(getHistorySuccess(response.data))
        } catch (err) {
            dispatch(getHistoryFailure(err))
        }
    }
}

export const getHistoryDetails = (id) => {
    return async dispatch => {
        try {
            // console.log('dispatch', dispatch)
            dispatch(detailsRequest());
            // console.log('API');
            // console.log(`/api/histories/${id}`);
            const response = await database.get(`/api/histories/${id}`);
            dispatch(detailsSuccess(response.data))
        } catch (err) {
            dispatch(detailsFailure(err))
        }
    }
}
