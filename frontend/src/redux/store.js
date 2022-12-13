import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk  from 'redux-thunk'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer } from './reducers/userReducers'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : [];

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage }

}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            productList: productListReducer,
            productDetails: productDetailsReducer,
            cart: cartReducer,
            userLogin: userLoginReducer,
            userRegister: userRegisterReducer,
            userDetails: userDetailsReducer
        }),
        initialState, 
        composeWithDevTools(applyMiddleware(thunk)) 
    )
    return store 
}