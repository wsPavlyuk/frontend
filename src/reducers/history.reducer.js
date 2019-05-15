export const history = (state = { saved: false }, action) => {
    switch (action.type) {
        case 'HISTORY_SUCCESS':
          return { ...state, saved: true };
        case 'HISTORY_FAILURE':
          return { ...state, saved: false };
        default:
          return state;
    }
};
