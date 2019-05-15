export const history = (state = {}, action) => {
    switch (action.type) {
        case 'HISTORY_SUCCESS':
          return { ...state, ...action.payload };
        case 'HISTORY_FAILURE':
          return { ...state, ...action.payload };
        default:
          return state;
    }
};

export const takenHistory = (state = [], action) => {
    switch (action.type) {
        case 'GET_HISTORY_SUCCESS':
          return { ...state, ...action.payload };
        case 'GET_HISTORY_FAILURE':
          return { ...state, ...action.payload };
        default:
          return state;
    }
};
