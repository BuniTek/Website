export const searchContent = (query) => (dispatch) => {
  dispatch({
    type: 'SEARCH_CONTENT',
    payload: query,
  });
};
