
const actionTypes = [
  'ui/CHANGING_LOGO',
  'ui/CHANGED_LOGO',
];

export default (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes[1]:
      return {
        ...state,
        logoUrl: payload,
      };

    default:
      return state;
  }
};
