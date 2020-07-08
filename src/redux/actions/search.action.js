export const searchContent = (query) => (dispatch) => {
  dispatch({
    type: 'SEARCH_CONTENT',
    payload: query,
  });
};

export const resetSearchState = () => (dispatch) => {
  dispatch({
    type: 'RESET_SEARCH_STATE',
  });
};
