import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // usado para funções async nas actions quando for fazer o dispatch
import prodReducer from './reducers/prodReducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // usar o plugin Redux DevTools no Google Chrome.

const reducers = combineReducers({
  products: prodReducer
})

const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

function configureStore() {
  return store
}

export default configureStore