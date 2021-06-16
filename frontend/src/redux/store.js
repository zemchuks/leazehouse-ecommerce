import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk  from 'redux-thunk'
import { productListReducer } from './productReducer'

const initialState = {}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            productList: productListReducer
        }),
        initialState, 
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}