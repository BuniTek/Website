
const actionTypes = [
  'ui/CHANGING_LOGO',
  'ui/CHANGED_LOGO',
  'ui/SET_FOOTER_VISIBILITY',
  'ui/CHANGE_HEADING',
];

export default (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes[1]:
      return {
        ...state,
        logoUrl: payload,
      };
    case actionTypes[2]:
      return {
        ...state,
        footerVisible: payload,
      };
    case actionTypes[3]:
      return {
        ...state,
        heading: payload,
      };

    default:
      return state;
  }
};
