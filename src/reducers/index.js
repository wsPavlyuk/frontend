import { combineReducers } from 'redux';
import { register } from './auth.reducer';
import { login } from './auth.reducer';
import { check } from './auth.reducer';

import { weather } from './history.reducer';
import { historyList } from './history.reducer';
import { historyDetails } from './history.reducer';



export default combineReducers({
    register,
    login,
    check,
    weather,
    historyList,
    historyDetails
});