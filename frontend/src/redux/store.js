import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk  from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    checkout: false 
}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            productList: productListReducer,
            productDetails: productDetailsReducer,
            cart: cartReducer
        }),
        initialState, 
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store 
}