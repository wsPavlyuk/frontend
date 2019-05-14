import { combineReducers } from 'redux';
import { register } from './auth.reducer';
import { login } from './auth.reducer';
import { check } from './auth.reducer';


export default combineReducers({
    register,
    login,
    check
});