import { combineReducers } from 'redux';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
};

const dataUser = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CREATE_USER':
          return { ...state};
        default:
          return state;
    }
};

export default combineReducers({
    user: dataUser,
});