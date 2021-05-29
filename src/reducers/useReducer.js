
const useReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: "" }
    case "FETCH_SUCCESS":
      return { ...state, loading: false, user: action.payload }
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload }
    default:
      throw new Error(`Unsupported action type ${action.type} in useReducer`)
  }
}

export default useReducer