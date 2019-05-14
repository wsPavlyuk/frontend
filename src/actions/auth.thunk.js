import {
    registerRequest,
    registerSuccess,
    registerFailure,
    
    checkRequest,
    checkSuccess,
    checkFailure,

    loginRequest,
    loginSuccess,
    loginFailure
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

export const checkLogin = () => {
    return async dispatch => {
        try{
            console.log('dispatch', dispatch)
            dispatch(checkRequest());
            const response = await database.get('/api/users/check');
            dispatch(checkSuccess(response.data))
        } catch (err) {
            dispatch(checkFailure(err))
        }
    }
}

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