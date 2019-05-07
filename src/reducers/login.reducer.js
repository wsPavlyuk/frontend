const initialState = {
    isLogged: false,
    error: null,
    token: '',
    email: ''
  };


const logIn = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
          return { ...state, isLogged: true, error: null, token: action.payload.token, email: action.payload.email};
        case 'LOGIN_FAILURE':
          return { ...state, error: action.payload.error, isLogged: false, token: '', email: '' };
        default:
          return state;
    }
};

export default logIn;