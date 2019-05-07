const initialState = {
    loading: false,
    error: null
  };


const register = (state = initialState, action) => {
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

export default register;