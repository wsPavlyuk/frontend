export const history = (state = {saved: false}, action) => {
    switch (action.type) {
        case 'HISTORY_SUCCESS':
          return { ...state, saved: true };
        case 'HISTORY_FAILURE':
          return { ...state, saved: false };
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
