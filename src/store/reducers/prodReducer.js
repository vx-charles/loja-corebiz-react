const initialState = {
  loading: true,
  prodList: [],
  addCart: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_PROD":
      return { ...state, prodList: action.payload, loading: false }
    case "ADD_CART":
      return { ...state, addCart: action.payload }
    case "EXCLUDE_CART":
      return { ...state, addCart: action.payload }
    default:
      return state
  }
}

export default reducer