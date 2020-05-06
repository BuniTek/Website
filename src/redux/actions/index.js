
export const setLogoUrl = ({ logo }) => (dispatch) => {
  dispatch({
    type: 'ui/CHANGED_LOGO',
    payload: logo,
  });
};

export default setLogoUrl;
