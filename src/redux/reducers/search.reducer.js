
const INITIAL_STATE = {
  query: '',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'SEARCH_CONTENT':
      return {
        ...state,
        query: payload,
      };

    case 'RESET_SEARCH_STATE':
      return {
        ...state,
        query: '',
      };

    default:
      return state;
  }
};
