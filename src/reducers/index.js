import { combineReducers } from 'redux';
import register from './auth.reducer';

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   password: ''
// };

const dataUser = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_USER':
          return { ...state};
        case 'USER_ACCESS':
          return { ...state, ...action.payload};
        default:
          return state;
    }
};

export default combineReducers({
    user: dataUser,
    register
});