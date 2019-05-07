import {
    loginRequest,
    loginSuccess,
    loginFailure
} from '../actions/login.action';
import database from '../api/database';

export const login = (formValues) => {
    return async dispatch => {
        try {
            console.log('formValues', formValues);
            console.log('dispatch', dispatch)
            dispatch(loginRequest());
            const response = await database.post('/api/users', formValues);
            console.log(response);
            dispatch(loginSuccess(response.data))
        } catch (err) {
            dispatch(loginFailure(err))
        }
    }
}