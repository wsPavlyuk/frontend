const initialState = {
    loading: false,
    error: null
  };


const register = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
          return { ...state, ...action.payload};
        case 'REGISTER_FAILURE':
          return { ...state};
        default:
          return state;
    }
};

export default register;