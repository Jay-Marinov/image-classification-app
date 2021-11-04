const reducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return { ...state, loading: action.payload };
  }

  if (action.type === "SET_MODEL") {
    return { ...state, model: action.payload };
  }

  if (action.type === "SET_IMGURL") {
    return { ...state, imgURL: action.payload };
  }

  if (action.type === "SET_IMGREF") {
    return { ...state, imgRef: action.payload };
  }

  if (action.type === "SET_RESULT") {
    return { ...state, result: action.payload };
  }

  if (action.type === "SET_HISTORY") {
    return { ...state, history: [action.payload, ...state.history] };
  }

  throw new Error("no matcinh action type");
};

export default reducer;
