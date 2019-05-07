import { combineReducers } from 'redux';
import register from './auth.reducer';
import login from './login.reducer';


export default combineReducers({
    register,
    login
});