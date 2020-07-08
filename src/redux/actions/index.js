
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

export const changeCoursePageHeading = (heading) => (dispatch) => {
  dispatch({
    type: 'ui/CHANGE_HEADING',
    payload: heading,
  });
}

export default setLogoUrl;
