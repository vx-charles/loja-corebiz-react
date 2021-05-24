const initialState = {
  loading: true,
  prodList: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_PROD":
      return { ...state, prodList: action.payload, loading: false }
    default:
      return state
  }
}

export default reducer