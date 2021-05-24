import axios from 'axios'
import _ from 'lodash'

const prodAPI = 'https://corebiz-test.herokuapp.com/api/v1/products'

export const prodListApi = () => {
  return async dispatch => { // usando middleware redux-thunk para async actions dispatch
    const respProd = await axios.get(prodAPI)
    return dispatch({ type: 'GET_LIST_PROD', payload: respProd.data })
  }
}

export const addCart = addProd => {
  
  let prodFilter = addProd.filter(function (a) { // Evita de add produtos iguais.
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
  }, Object.create(null))
  
  addProd[addProd.length-1].add = true

  localStorage.setItem('add_cart_corebiz', JSON.stringify(prodFilter))

  return dispatch => {
    return dispatch({ type: 'ADD_CART', payload: prodFilter })
  }
}

export const prodCartExclude = (product, id) => {
  console.log(product)
  const newList = _.remove(product, function(obj){
    if(obj.productId === id){
      obj.add = false // add false dizendo que o produto foi excluído do carrinho
    }
    return !_.isEqual(id, obj.productId); //utiliza o isEqual para comparar
  })

  localStorage.setItem('add_cart_corebiz', JSON.stringify(newList))
  
  if(localStorage.getItem('add_cart_corebiz') === "[]") {
    localStorage.removeItem('add_cart_corebiz')
  }
  
  return dispatch => {
    return dispatch({ type: 'EXCLUDE_CART', payload: newList })
  } 
}