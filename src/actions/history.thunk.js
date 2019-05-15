import {
    historyRequest,
    historySuccess,
    historyFailure
} from '../actions/history.action'
import database from '../api/database';

export const saveHistory = (data) => {
    return async dispatch => {
        try {
            console.log('DataWeather', data);
            console.log('dispatch', dispatch)
            dispatch(historyRequest());
            const response = await database.post('/api/histories/create', data);
            dispatch(historySuccess(response.data))
        } catch (err) {
            dispatch(historyFailure(err))
        }
    }
}
