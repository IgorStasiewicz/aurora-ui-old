const initialState = {
  currentLang: "GB",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT_LANG":
      return {
        ...state,
        currentLang: payload,
      };
    default:
      return state;
  }
};

export default reducer;
