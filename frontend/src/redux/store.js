import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk  from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'

const initialState = {}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            productList: productListReducer,
            productDetails: productDetailsReducer
        }),
        initialState, 
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}