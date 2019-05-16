export const weather = (state = {}, action) => {
    switch (action.type) {
        case 'HISTORY_SUCCESS':
          return { ...state, ...action.payload };
        case 'HISTORY_FAILURE':
          return { ...state, ...action.payload };
        default:
          return state;
    }
};

export const historyList = (state = [], action) => {
    switch (action.type) {
        case 'GET_HISTORY_SUCCESS':
          return { ...state, ...action.payload };
        case 'GET_HISTORY_FAILURE':
          return { ...state, ...action.payload };
        default:
          return state;
    }
};

export const historyDetails = (state = {}, action) => {
  switch (action.type) {
      case 'DETAILS_SUCCESS':
        return { ...state, ...action.payload };
      case 'DETAILS_FAILURE':
        return { ...state, ...action.payload };
      default:
        return state;
  }
};
