export const register = (state = { loading: false, error: null }, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
          return { ...state, loading: true, error: null};
        case 'REGISTER_FAILURE':
          console.log(action.payload);
          return { ...state, error: action.payload.response.statusText, loading: false };
        default:
          return state;
    }
};

export const check = (state = { checkin: false }, action) => {
    switch (action.type) {
        case 'CHECK_SUCCESS':
          return { ...state, checkin: true };
        case 'CHECK_FAILURE':
          console.log(action.payload);
          return { ...state, checkin: false };
        default:
          return state;
    }
};

export const login = (state = {
  isLogged: false,
  error: null,
  token: '',
  email: ''
}, action) => {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isLogged: true, error: null, token: action.payload.token, email: action.payload.email};
      case 'LOGIN_FAILURE':
        return { ...state, error: action.payload.error, isLogged: false, token: '', email: '' };
      default:
        return state;
  }
};


