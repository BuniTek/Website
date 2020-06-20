
const actionTypes = [
  'ui/CHANGING_LOGO',
  'ui/CHANGED_LOGO',
  'ui/SET_FOOTER_VISIBILITY'
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

    default:
      return state;
  }
};
