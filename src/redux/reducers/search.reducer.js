export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'SEARCH_CONTENT':
      return {
        ...state,
        query: payload,
      };

    default:
      return state;
  }
};
