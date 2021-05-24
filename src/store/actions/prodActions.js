import axios from 'axios'

const prodAPI = 'https://corebiz-test.herokuapp.com/api/v1/products'

export const prodListApi = () => {
  return async dispatch => { // usando middleware redux-thunk para async actions dispatch
    const respProd = await axios.get(prodAPI)
    return dispatch({ type: 'GET_LIST_PROD', payload: respProd.data })
  }
}
