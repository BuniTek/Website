
export const setLogoUrl = ({ logo }) => (dispatch) => {
  dispatch({
    type: 'ui/CHANGED_LOGO',
    payload: logo,
  });
};

export const setFooterVisible = ({ visible }) => (dispatch) => {
  dispatch({
    type: 'ui/SET_FOOTER_VISIBILITY',
    payload: visible,
  });
}

export default setLogoUrl;
