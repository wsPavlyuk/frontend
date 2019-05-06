import {
    registerRequest,
    registerSuccess,
    registerFailure
} from '../actions/auth.action'
import database from '../api/database';

export const register = (formValues) => {
    return async dispatch => {
        try {
            console.log('formValues', formValues);
            console.log('dispatch', dispatch)
            dispatch(registerRequest());
            const response = await database.post('/api/users/create', formValues);
            dispatch(registerSuccess(response.data))
        } catch (err) {
            dispatch(registerFailure(err))
        }
    }
}